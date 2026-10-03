import get_notifications from "../../../server/use_cases/notifications/get_notifications.js";
import display_notifications from "./helpers/display_notifications.js";

async function get_notifications_interface() {
    const user = JSON.parse(localStorage.getItem('user'));
    const { status, json } = await get_notifications({
        user_id: user.id,
        notificaion_id: null,
        unique: false
    });
    if (status !== 200) return;
    const { notifications } = json;
    console.log(notifications);
    display_notifications(notifications);
}

export default get_notifications_interface;