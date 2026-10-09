import base_url from "../../base_url.js"

async function post_observation (params) {
    const req = await fetch(`${base_url}/post_observation`, {
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

export default post_observation;