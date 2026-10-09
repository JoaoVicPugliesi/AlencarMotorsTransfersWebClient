import base_url from "../../base_url.js"

async function get_transfers (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_transfers?${query}`, {
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
            transfers: json.transfers
        }
    }
}

export default get_transfers;