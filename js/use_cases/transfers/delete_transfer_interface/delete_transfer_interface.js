import delete_transfer from "../../../server/use_cases/transfers/delete_transfer.js";
import get_transfer_users from "../../../server/use_cases/transfers/get_transfer_users.js";
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import get_transfers_interface from "../get_transfers_interface/get_transfers_interface.js";
import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';
import adapt_togglers from '../../../helpers/adapt_togglers.js';
import { get_current_user } from "../../users/helpers/get_current_user.js";
import show_message from "../../../helpers/messages/show_message.js";

async function delete_transfer_interface(command_i) {
    const main = document.querySelector('#main');
    const form_i = main.lastElementChild;
    const painel_i = command_i.closest('.painel');
    if (!painel_i || !form_i) {
        show_message(
            'error',
            'Erro'
        );
        return
    };
    const ids_i = JSON.parse(painel_i.dataset.ids);
    const password = form_i.querySelector('#confirm-password');
    const command = form_i.querySelector('#confirm-command');
    command.addEventListener('click', async () => {
        const user = get_current_user();
        if (!password.value) {
            show_message(
                'error',
                'Os campos precisam ser preenchidos'
            );
            return;
        }
        const loading_message = show_message(
            'loading',
            'Reativando Transferência'
        );
        const { status: t_status, json: t_json } = await get_transfer({
            id: ids_i.id
        });
        const { message: t_message, transfer: t_transfer } = t_json;
        if (t_status !== 200) {
            show_message(
                'error',
                'Erro ao reativar a transferência'
            );
            return;
        }
        const { status: tr_status, json: tr_json } = await get_transfer_users({
            id: t_transfer.id
        });
        if (tr_status !== 200) {
            show_message(
                'error',
                'Erro ao reativar a transferência'
            );
            return;
        }
        const params = {
            username: user.username,
            password: password.value,
            transfer_id: ids_i.id
        }
        const { status: d_status, json: d_json } = await delete_transfer(params);
        if (d_status !== 200) {
            show_message(
                'error',
                'Erro ao reativar a transferência'
            );
            return;
        }
        const { transfer_users } = tr_json;
        const now = new Date();
        const notification = await post_notifications_interface({
            transfer_id: null,
            content: `Transferência ${t_transfer.code} deletada por ${user.username}`,
            generated_by: user.id,
            created_at: set_timestamp(now)
        });
        let participants = transfer_users.filter((t) => String(t.user_id.trim().toUpperCase()) !== String(user.id.trim().toUpperCase()))
        participants.forEach(async (p) => {
            await post_user_notifications_interface({
                user_id: p.user_id,
                notification_id: notification.id,
                notified_at: notification.created_at
            });
        });

        painel_i.remove();
        form_i.remove();
        adapt_togglers();
        await get_transfers_interface();
        loading_message.remove();
        show_message(
            'success',
            'Transferência deletada'
        );
    });
}

export default delete_transfer_interface;