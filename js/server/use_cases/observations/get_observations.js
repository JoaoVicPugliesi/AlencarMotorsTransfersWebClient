import base_url from "../../base_URL.js"

async function get_observations (params) {
    const query = new URLSearchParams(params).toString();
    const req = await fetch(`${base_url}/get_observations?${query}`, {
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
            observations: json.observations
        }
    }
}

export default get_observations;