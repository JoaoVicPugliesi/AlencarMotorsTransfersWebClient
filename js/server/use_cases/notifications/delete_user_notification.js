import base_url from "../../base_url.js"

async function delete_user_notification (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/delete_user_notification?${query}`, {
        method: 'DELETE'
    });

    const status = req.status;
    const json = await req.json();
    return {
        status: status,
        json: {
            message: json.message,
        }
    }
}

export default delete_user_notification;