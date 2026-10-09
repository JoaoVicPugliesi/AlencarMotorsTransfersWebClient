import base_url from "../../base_url.js"

async function register (params) {
    const req = await fetch(`${base_url}/register`, {
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

export default register;