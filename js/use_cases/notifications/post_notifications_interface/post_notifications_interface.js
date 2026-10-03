import post_notifications from "../../../server/use_cases/notifications/post_notifications.js";

async function post_notifications_interface (params) {
    console.log(params);
    const { status, json } = await post_notifications(params);

    if(status !== 201) {
        window.alert(json.message)
        return;
    }

    const { message, notification } = json;

    return notification;
}

export default post_notifications_interface;