import base_url from "../../base_URL.js";

async function get_notifications (params) {
    const query = new URLSearchParams(params).toString();
    const request = await fetch(`${base_url}/get_notifications?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });
    const status = request.status;
    const json = await request.json();
    console.log(json);
    return { 
        status: status,
        json: json
    }
}

export default get_notifications;