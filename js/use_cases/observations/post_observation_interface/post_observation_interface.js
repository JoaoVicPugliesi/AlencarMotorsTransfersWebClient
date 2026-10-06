import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import post_observation from '../../../server/use_cases/observations/post_observation.js';
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';
import painel from '../../../components/parts/painel/painel.js';
import adapt_togglers from '../../../helpers/adapt_togglers.js';
import get_transfers_interface from '../../transfers/get_transfers_interface/get_transfers_interface.js';
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import get_transfer_users from "../../../server/use_cases/transfers/get_transfer_users.js";
import { get_current_user } from '../../users/helpers/get_current_user.js';
import show_message from '../../../helpers/messages/show_message.js';

async function post_observation_interface(command_i) {
    const main = document.getElementById('main');
    const form_i = main.lastElementChild;
    const painel_i = command_i.closest('.painel');
    if (!painel_i || !form_i) {
        show_message(
            'error',
            'Erro'
        );
        return;
    };
    const ids = JSON.parse(painel_i.dataset.ids);
    const title = form_i.querySelector('#add-observation-title');
    const description = form_i.querySelector('#add-observation-description');
    const command = form_i.querySelector('#add-observation-add');
    command.addEventListener('click', async (e) => {
        const user_i = get_current_user();
        if (!title.value || !description.value) {
            show_message(
                'error',
                'Campos precisam ser preenchidos'
            );
            return;
        }
        const { status: t_status, json: t_json } = await get_transfer({ id: ids.id });
        if (t_status !== 200) {
            show_message(
                'error',
                'Erro ao adicionar a observação'
            );
            return;
        }
        const { transfer } = t_json;

        const params = {
            transfer_id: transfer.id,
            title: title.value,
            description: description.value,
            initial_date: set_timestamp(new Date()),
            term_date: transfer.term_date
        }
        const loading_message = show_message(
            'loading',
            'Adicionando Observação'
        );
        const { status: ob_status, json: ob_json } = await post_observation(params);

        if (ob_status !== 201) return;

        const { status: obs_status, json: obs_json } = await get_observations({
            id: transfer.id
        });
        if (obs_status !== 200) {
            show_message(
                'error',
                'Erro ao adicionar a observação'
            );
            return;
        }
        const { observations } = obs_json;
        let pending_observations = [];
        let concluded_observations = [];
        if (observations) {
            pending_observations = observations.filter((ob) => ob.status === 'pending');
            concluded_observations = observations.filter((ob) => ob.status === 'concluded');
        }
        const transfer_i = JSON.parse(painel_i.dataset.params);
        const params_i = {
            ...transfer_i,
            pending_observations: pending_observations.length > 0 ? pending_observations.length : '0',
            concluded_observations: concluded_observations.length > 0 ? concluded_observations.length : '0',
            observations: observations ? [
                ...observations
            ] : null
        }

        const { status: tr_status, json: tr_json } = await get_transfer_users({
            id: transfer.id
        });
        if (tr_status !== 200) {
            show_message(
                'error',
                'Erro ao adicionar a observação'
            );
            return;
        }
        const { transfer_users } = tr_json;
        const notification = await post_notifications_interface({
            transfer_id: transfer.id,
            content: `Observação criada por ${user_i.username} na transferência ${transfer.code} `,
            generated_by: user_i.id,
            created_at: set_timestamp(new Date())
        });
        let participants = transfer_users.filter((t) => String(t.user_id.trim().toUpperCase()) !== String(user_i.id.trim().toUpperCase()))
        participants.forEach(async (p) => {
            await post_user_notifications_interface({
                user_id: p.user_id,
                notification_id: notification.id,
                notified_at: notification.created_at
            });
        });

        const trigger = painel_i._trigger;

        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', params_i)
        );

        const new_painel = main.lastElementChild;

        new_painel._trigger = trigger;

        painel_i.remove();
        form_i.remove();

        adapt_togglers();
        get_transfers_interface();
        loading_message.remove();
        show_message(
            'success',
            'Observação Adicionada'
        );
    });
}

export default post_observation_interface;