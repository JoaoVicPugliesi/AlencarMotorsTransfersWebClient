import base_url from "../../base_url.js"

async function post_notifications (params) {
    const req = await fetch(`${base_url}/post_notifications`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const { message, notification } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            notification: notification
        }
    }
}

export default post_notifications;