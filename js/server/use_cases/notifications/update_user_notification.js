import base_url from "../../base_URL.js"

async function update_user_notification (params) {
    const req = await fetch(`${base_url}/update_user_notification`, {
        method: 'PATCH',
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

export default update_user_notification;