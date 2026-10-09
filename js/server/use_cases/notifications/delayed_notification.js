import base_url from "../../base_url.js"

async function delayed_notification (params) {
    const req = await fetch(`${base_url}/delayed_notification`, {
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

export default delayed_notification;