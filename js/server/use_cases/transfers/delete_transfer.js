import base_url from "../../base_URL.js"

async function delete_transfer (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/delete_transfer?${query}`, {
        method: 'DELETE'
    });

    const status = req.status;
    const json = await req.json();
    return {
        status: status,
        json: {
            message: json.message,
        }
    }
}

export default delete_transfer;