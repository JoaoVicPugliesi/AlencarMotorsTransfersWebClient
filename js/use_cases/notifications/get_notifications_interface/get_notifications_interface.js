import get_notifications from "../../../server/use_cases/notifications/get_notifications.js";
import display_notifications from "./helpers/display_notifications.js";
import { get_current_user } from '../../users/helpers/get_current_user.js';

async function get_notifications_interface() {
    const user = get_current_user();
    const { status, json } = await get_notifications({
        user_id: user.id,
        notification_id: null,
        unique: false
    });
    if (status !== 200) return;
    const { notifications } = json;
    display_notifications(notifications);
}

export default get_notifications_interface;