import show_message from "../../../helpers/messages/show_message.js";
import post_notifications from "../../../server/use_cases/notifications/post_notifications.js";

async function post_notifications_interface (params) {
    const { status, json } = await post_notifications(params);

    if(status !== 201) {
        show_message(
            'error',
            'Erro ao postar notificação'
        )
        return;
    }

    const { message, notification } = json;

    return notification;
}

export default post_notifications_interface;