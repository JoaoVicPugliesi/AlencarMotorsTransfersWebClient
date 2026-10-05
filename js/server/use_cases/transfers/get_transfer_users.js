import base_url from "../../base_URL.js"

async function get_transfer_users (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_transfer_users?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    const status = req.status;
    const { message, transfer_users } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            transfer_users: transfer_users
        }
    }
}

export default get_transfer_users;