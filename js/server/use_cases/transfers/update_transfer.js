import base_url from "../../base_URL.js"

async function update_transfer (params) {
    const req = await fetch(`${base_url}/update_transfer`, {
        method: 'PATCH',
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

export default update_transfer;