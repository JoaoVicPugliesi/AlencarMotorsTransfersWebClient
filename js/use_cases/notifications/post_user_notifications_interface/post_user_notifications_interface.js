import show_message from "../../../helpers/messages/show_message.js";
import post_user_notifications from "../../../server/use_cases/notifications/post_user_notifications.js";

async function post_user_notifications_interface (params) {
    const { status, json } = await post_user_notifications(params);
    if(status !== 201) {
        show_message(
            'error',
            'Erro ao postar notificação'
        )
        return;
    }
}

export default post_user_notifications_interface;