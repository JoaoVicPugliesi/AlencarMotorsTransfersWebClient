import update_user_notification from '../../../server/use_cases/notifications/update_user_notification.js';
import get_notifications_interface from '../get_notifications_interface/get_notifications_interface.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';

async function update_user_notification_interface(el) {
    console.log(el);
    if (!el) {
        window.alert('Notificação não existe')
        return
    }
    const ids = JSON.parse(el.dataset.ids);
    const { id, user_id } = ids;
    const { status, json } = await update_user_notification({
        user_id: user_id,
        notification_id: id,
        viewed_at: set_timestamp(new Date())
    });
    const { message } = json;
    if (status !== 200) {
        window.alert(`${message}`);
        return;
    }
    await get_notifications_interface();
}

export default update_user_notification_interface;