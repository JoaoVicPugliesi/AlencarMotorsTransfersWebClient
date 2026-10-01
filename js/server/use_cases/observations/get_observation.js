import base_url from "../../base_URL.js"

async function get_observation (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_observation?${query}`, {
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
            observation: json.observation
        }
    }
}

export default get_observation;