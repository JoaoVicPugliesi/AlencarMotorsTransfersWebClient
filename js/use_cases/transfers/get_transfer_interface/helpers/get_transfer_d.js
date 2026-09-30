import get_transfer from "../../../../server/use_cases/transfers/get_transfer.js";
import get_observations from '../../../../server/use_cases/observations/get_observations.js';

async function get_transfer_d (el) {
    const id = el.dataset.id;
    if(!id) return;
    const { status: tr_status, json: tr_json } = await get_transfer({
        id: id
    });
    const { message: tr_message, transfer } = tr_json;
    if(tr_status !== 200) {
        window.alert(`${tr_message}`);
        return;
    }
    const { status: ob_status, json: ob_json } = await get_observations({
        id: transfer.id
    });
    const { message, observations } = ob_json;
   
    return {
        ...transfer,
        observations: observations ? [
            ...observations
        ] : null
    };
}

export default get_transfer_d;