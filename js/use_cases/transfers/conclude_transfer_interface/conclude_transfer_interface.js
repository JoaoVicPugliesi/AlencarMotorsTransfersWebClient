import painel from "../../../components/parts/painel/painel.js";
import show_message from "../../../helpers/messages/show_message.js";
import set_timestamp from "../../../helpers/timestamp/set_timestamp.js";
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import conclude_transfer from "../../../server/use_cases/transfers/conclude_transfer.js";
import get_transfer_users from "../../../server/use_cases/transfers/get_transfer_users.js";
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import { get_current_user } from "../../users/helpers/get_current_user.js";
import get_transfers_interface from "../get_transfers_interface/get_transfers_interface.js";

async function conclude_transfer_interface(command_i) {
    const main = document.querySelector('#main');
    const painel_i = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    if (!painel_i || !form_i) {
        show_message(
            'error',
            'Erro'
        );
        return;
    }
    const ids_i = JSON.parse(painel_i.dataset.ids);
    const password = form_i.querySelector('#confirm-password');
    const command = form_i.querySelector('#confirm-command');
    command.addEventListener('click', async () => {
        const user_i = get_current_user();
        if (!password.value) {
            show_message(
                'error',
                'Os campos precisam ser preenchidos'
            );
            return;
        }
        const now = new Date();
        const params = {
            id: ids_i.id,
            final_date: set_timestamp(now),
            username: user_i.username,
            password: password.value
        };
        const loading_message = show_message(
            'loading',
            'Concluindo transferência'
        );
        const {
            status: c_status,
            json: c_json
        } = await conclude_transfer(params);

        const {
            message: c_message,
            transfer: c_transfer
        } = c_json;
        if (c_status !== 200) {
            show_message(
                'error',
                `${c_message}`
            );
            return;
        }
        const trigger = painel_i._trigger;
        form_i.remove();
        painel_i.remove();
        const {
            json: obs_json
        } = await get_observations({
            id: c_transfer.id
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
            ...c_transfer,
            pending_observations: pending_observations.length,
            concluded_observations: concluded_observations.length,
            observations: observations ?? null
        };
        const { status: tr_status, json: tr_json } = await get_transfer_users({
            id: c_transfer.id
        });
        if (tr_status !== 200) {
            show_message(
                'error',
                'Erro ao concluir a transferência'
            );
            return;
        }
        const { transfer_users } = tr_json;
        const notification = await post_notifications_interface({
            transfer_id: c_transfer.id,
            content: `Transferência ${c_transfer.code} concluída por ${user_i.username}`,
            generated_by: user_i.id,
            created_at: set_timestamp(now)
        });
        let participants = transfer_users.filter((t) => String(t.user_id.trim().toUpperCase()) !== String(user_i.id.trim().toUpperCase()))
        await Promise.all(
           participants.map((p) =>
                post_user_notifications_interface({
                    user_id: p.user_id,
                    notification_id: notification.id,
                    notified_at: notification.created_at
                })
            )
        );
        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', updated_params)
        );
        const new_painel = main.lastElementChild;
        new_painel._trigger = trigger;
        await get_transfers_interface();
        loading_message.remove();
        show_message(
            'success',
            'Transferência concluída'
        );
    });
}

export default conclude_transfer_interface;