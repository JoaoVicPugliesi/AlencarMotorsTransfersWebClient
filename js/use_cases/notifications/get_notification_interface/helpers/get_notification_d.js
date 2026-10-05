import get_transfer from "../../../../server/use_cases/transfers/get_transfer.js";
import get_observations from '../../../../server/use_cases/observations/get_observations.js';
import update_user_notification_interface from "../../update_user_notification_interface/update_user_notification_interface.js";

async function get_notification_d (el) {
    const ids_i = JSON.parse(el.dataset.ids);
    if(!ids_i) return;
    const { status: tr_status, json: tr_json } = await get_transfer({
        id: ids_i.transfer_id
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
    let pending_observations = [];
    let concluded_observations = [];
    if(observations) {
        pending_observations = observations.filter((ob) => ob.status === 'pending');
        concluded_observations = observations.filter((ob) => ob.status === 'concluded');
    }
    await update_user_notification_interface(el);
    return {
        ...transfer,
        pending_observations: pending_observations.length > 0 ? pending_observations.length : '0',
        concluded_observations: concluded_observations.length > 0 ? concluded_observations.length : '0',
        observations: observations ? [
            ...observations
        ] : null
    };
}

export default get_notification_d;