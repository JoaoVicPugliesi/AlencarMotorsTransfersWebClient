import base_url from "../../base_URL.js"

async function get_users (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_users?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    const status = req.status;
    const { message, users } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            users: users
        }
    }
}

export default get_users;