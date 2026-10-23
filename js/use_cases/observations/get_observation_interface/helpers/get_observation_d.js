import error from "../../../../components/parts/messages/error.js";
import get_observation from "../../../../server/use_cases/observations/get_observation.js";

async function get_observation_d (el) {
    const id = el.dataset.id;
    const params = JSON.parse(el.closest('.painel').dataset.params);
    if(!id || !params) return;
    const { name, plate, vehicle, code } = params;
    const { status: tr_status, json: tr_json } = await get_observation({
        id: id
    });
    const { observation } = tr_json;
    if(tr_status !== 200) {
        error(
            'error',
            'Erro ao pegar observação'
        )
        return;
    }
    return {
        name: name,
        plate: plate,
        vehicle: vehicle,
        code: code,
        ...observation,
    };
}

export default get_observation_d;