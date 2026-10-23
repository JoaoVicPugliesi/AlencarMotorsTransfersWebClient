import show_message from '../../../helpers/messages/show_message.js';
import delete_user_notification from '../../../server/use_cases/notifications/delete_user_notification.js';
import get_notifications_interface from '../get_notifications_interface/get_notifications_interface.js';

function delete_user_notification_interface () {
    const commands = document.querySelectorAll('.notification-options-delete');
    commands.forEach((c) => {
        c.addEventListener('click', async (e) => {
            const loading_message = show_message(
                'loading',
                'Deletando...'
            );
            const ids = JSON.parse(c.dataset.ids);
            const { id, user_id } = ids;
            const { status, json } = await delete_user_notification({
                user_id: user_id,
                notification_id: id
            });
            if(status !== 200) {
                show_message(
                    'error',
                    'Erro ao deletar notificação'
                )
                loading_message.remove();
                return;
            }
            await get_notifications_interface();
            loading_message.remove();
        });
    });
}

export default delete_user_notification_interface;