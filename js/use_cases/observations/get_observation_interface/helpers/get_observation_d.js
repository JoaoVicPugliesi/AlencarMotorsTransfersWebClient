import error from "../../../../components/parts/messages/error.js";
import get_observation from "../../../../server/use_cases/observations/get_observation.js";

async function get_observation_d (el) {
    const id = el.dataset.id;
    if(!id) return;
    const { status: tr_status, json: tr_json } = await get_observation({
        id: id
    });
    const { message: tr_message, observation } = tr_json;
    if(tr_status !== 200) {
        error(
            'error',
            'Erro ao pegar observação'
        )
        return;
    }
    return {
        ...observation,
    };
}

export default get_observation_d;