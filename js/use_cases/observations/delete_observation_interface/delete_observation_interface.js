import painel from "../../../components/parts/painel/painel.js";
import delete_observation from "../../../server/use_cases/observations/delete_observation.js";
import get_observations from "../../../server/use_cases/observations/get_observations.js";
import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import get_transfer_users from "../../../server/use_cases/transfers/get_transfer_users.js";
import { get_current_user } from "../../users/helpers/get_current_user.js";


async function delete_observation_interface(command_i) {
    let main = document.querySelector('#main');
    let painel_i = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    const user_i = get_current_user();
    if (!painel_i || !form_i) {
        console.log({
            painel_i,
            form_i
        });
        return;
    }
    const ids_i = JSON.parse(painel_i.dataset.ids);
    const user = JSON.parse(localStorage.getItem('user'));
    const password = form_i.querySelector('#confirm-password');
    const command = form_i.querySelector('#confirm-command');
    command.addEventListener('click', async () => {
        if (!password.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const params = {
            username: user.username,
            password: password.value,
            observation_id: ids_i.id
        };

        
        const { status: ob_status, json: ob_json } = await delete_observation(params);
        if (ob_status !== 200) {
            window.alert(ob_json.message);
            return;
        }
        const { status: t_status, json: t_json } = await get_transfer({
            id: ids_i.transfer_id
        });
        
        if(t_status !== 200){
            window.alert(t_json.message);
            return;
        }
        const { transfer } = t_json;
        const {
            json: obs_json
        } = await get_observations({
            id: transfer.id
        });
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

        form_i.remove();
        painel_i.remove();
        const previous_painel = main.lastElementChild;
        if (!previous_painel?.classList.contains('painel')) {
            console.error('Transfer painel not found');
            return;
        }
        const { status: tr_status, json: tr_json } = await get_transfer_users({
            id: transfer.id
        });
        if (tr_status !== 200) {
            window.alert('No participants');
            return;
        }
        const { transfer_users } = tr_json;
        const notification = await post_notifications_interface({
            transfer_id: transfer.id,
            content: `Observação deletada por ${user_i.username} na transferência ${transfer.code} `,
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
        const trigger = previous_painel._trigger;
        previous_painel.remove();
        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', updated_params)
        );
        const new_painel = main.lastElementChild;
        new_painel._trigger = trigger;
        window.alert('Observação deletada');
    });
}

export default delete_observation_interface;