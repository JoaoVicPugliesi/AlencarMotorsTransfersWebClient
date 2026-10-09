import base_url from "../../base_url.js"

async function get_transfer (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_transfer?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    const status = req.status;
    const json = await req.json();
    return {
        status: status,
        json: {
            message: json.message,
            transfer: json.transfer
        }
    }
}

export default get_transfer;