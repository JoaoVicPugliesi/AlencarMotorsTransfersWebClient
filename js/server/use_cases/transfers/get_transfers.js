import base_url from "../../base_URL.js"

async function get_transfers (params) {
    console.log(params);
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_transfers?${query}`, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        },
    });

    const status = req.status;
    const json = await req.json();
    console.log(json);
    return {
        status: status,
        json: {
            message: json.message,
            transfers: json.transfers
        }
    }
}

export default get_transfers;