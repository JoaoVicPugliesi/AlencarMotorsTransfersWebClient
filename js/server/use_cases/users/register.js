import base_url from "../../base_URL.js"

async function register (params) {
    console.log(params);
    const req = await fetch(`${base_url}/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(params)
    });

    const status = req.status;
    const json = await req.json();
    console.log(status);
    console.log(json);
    return {
        status,
        json
    }
}

export default register;