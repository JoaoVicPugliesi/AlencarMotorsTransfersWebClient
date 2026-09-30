import base_url from "../../base_URL.js"

async function login (params) {
    const req = await fetch(`${base_url}/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const { message, user } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            user: user
        }
    }
}

export default login;