import base_url from "../../base_URL.js"

async function conclude_observation (params) {
    const req = await fetch(`${base_url}/conclude_observation`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const { message, observation } = await req.json();
    return {
        status: status,
        json: {
            message: message,
            observation: observation
        }
    }
}

export default conclude_observation;