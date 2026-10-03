import base_url from "../../base_URL.js"

async function post_user_notifications (params) {
    const req = await fetch(`${base_url}/post_user_notifications`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const { message } = await req.json();
    return {
        status: status,
        json: {
            message: message
        }
    }
}

export default post_user_notifications;