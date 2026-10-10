import painel from "../../../components/parts/painel/painel.js";
import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import update_observation from "../../../server/use_cases/observations/update_observation.js";
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import get_transfer_users from "../../../server/use_cases/transfers/get_transfer_users.js";
import set_timestamp from "../../../helpers/timestamp/set_timestamp.js";
import { get_current_user } from "../../users/helpers/get_current_user.js";
import show_message from "../../../helpers/messages/show_message.js";

async function update_observation_interface(command_i) {
    const main = document.querySelector('#main');
    const observation_painel = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    if (!observation_painel || !form_i) {
        show_message(
            'error',
            'Erro'
        );
        return;
    }
    const ids_i = JSON.parse(observation_painel.dataset.ids);
    const params_i = JSON.parse(observation_painel.dataset.params);
    const title = form_i.querySelector('#add-observation-name');
    const description = form_i.querySelector('#add-observation-description');
    title.value = params_i.title;
    description.value = params_i.description;
    const command = form_i.querySelector('#edit-observation-save');
    command.addEventListener('click', async () => {
        const user_i = get_current_user();
        if (!title.value || !description.value) {
            show_message(
                'error',
                'Campos precisam ser preenchidos'
            );
            return;
        }
        const params = {
            id: ids_i.id,
            title: title.value,
            description: description.value
        };
        const loading_message = show_message(
            'loading',
            'Atualizando Observação'
        );
        const {
            status: c_status,
            json: c_json
        } = await update_observation(params);
        if (c_status !== 200) {
            show_message(
                'error',
                'Erro ao atualizar a observação'
            );
            loading_message.remove();
            return;
        }
        const {
            message: c_message,
            observation: c_observation
        } = c_json;
        form_i.remove();
        observation_painel.remove();
        const transfer_painel = main.lastElementChild;
        if (!transfer_painel || !transfer_painel.classList.contains('painel')) {
            show_message(
                'error',
                'Erro ao atualizar a observação'
            );
            loading_message.remove();
            return;
        }
        const trigger = transfer_painel._trigger;
        transfer_painel.remove();
        const {
            status: t_status,
            json: t_json
        } = await get_transfer({
            id: ids_i.transfer_id
        });
        if (t_status !== 200) {
            show_message(
                'error',
                'Erro ao atualizar a observação'
            );
            loading_message.remove();
            return;
        }
        const { transfer } = t_json;
        const {
            status: obs_status,
            json: obs_json
        } = await get_observations({
            id: transfer.id
        });

        if (obs_status !== 200) {
            show_message(
                'error',
                'Erro ao atualizar a observação'
            );
            loading_message.remove();
            return;
        }
        const { observations } = obs_json;
        const pending_observations =
            observations?.filter(
                ob => ob.status === 'pending'
            ) ?? [];
        const concluded_observations =
            observations?.filter(
                ob => ob.status === 'concluded'
            ) ?? [];
        const updated_params = {
            ...transfer,
            pending_observations: pending_observations.length,
            concluded_observations: concluded_observations.length,
            observations: observations ?? null
        };
        const { status: tr_status, json: tr_json } = await get_transfer_users({
            id: transfer.id
        });
        if (tr_status !== 200) {
            show_message(
                'error',
                'Erro ao atualizar a observação'
            );
            loading_message.remove();
            return;
        }
        const { transfer_users } = tr_json;
        const notification = await post_notifications_interface({
            transfer_id: transfer.id,
            content: `Observação atualizada por ${user_i.username} na transferência ${transfer.code} `,
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
        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', updated_params)
        );
        const new_transfer_painel = main.lastElementChild;
        new_transfer_painel._trigger = trigger;
        main.insertAdjacentHTML(
            'beforeend',
            painel('observations', c_observation)
        );
        const new_observation_painel = main.lastElementChild;
        new_observation_painel._parent_painel = new_transfer_painel;
        loading_message.remove();
        show_message(
            'success',
            'Observação atualizada'
        );
    });
}

export default update_observation_interface;