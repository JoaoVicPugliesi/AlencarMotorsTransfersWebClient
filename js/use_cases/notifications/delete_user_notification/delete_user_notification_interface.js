import delete_user_notification from '../../../server/use_cases/notifications/delete_user_notification.js';
import get_notifications_interface from '../get_notifications_interface/get_notifications_interface.js';

function delete_user_notification_interface () {
    const commands = document.querySelectorAll('.notification-options-delete');
    commands.forEach((c) => {
        c.addEventListener('click', async (e) => {
            e.stopPropagation();
            const notification = e.target.closest('.notification');
            if(!notification) {
                window.alert('Notificação não existe')
                return
            }
            const ids = JSON.parse(notification.dataset.ids);
            const { id, user_id } = ids;
            const { status, json } = await delete_user_notification({
                user_id: user_id,
                notification_id: id
            });
            const { message } = json;
            if(status !== 200) {
                window.alert(`${message}`);
                return;
            }
            await get_notifications_interface();
        });
    });
}

export default delete_user_notification_interface;