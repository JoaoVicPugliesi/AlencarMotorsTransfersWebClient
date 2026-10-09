import base_url from "../../base_url.js"

async function post_transfer (params) {
    const req = await fetch(`${base_url}/post_transfer`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const { message, transfer } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            transfer: transfer
        }
    }
}

export default post_transfer;