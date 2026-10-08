import painel from "../../../components/parts/painel/painel.js";
import get_observation from "../../../server/use_cases/observations/get_observation.js";
import get_transfer from "../../../server/use_cases/transfers/get_transfer.js";
import open_close_painel_info from '../open_close_painel_info.js'
import adapt_togglers from "../../../helpers/adapt_togglers.js";

async function refresh_painel(painel_instance) {
    const mode = painel_instance.dataset.mode;
    const ids = JSON.parse(painel_instance.dataset.ids);
    let params;
    if (mode === 'observations') {
        const response = await get_observation({ id: ids.id });
        if (response.status !== 200) return;
        params = response.json.observation;
    }
    if (mode === 'transfers') {
        const response = await get_transfer({ id: ids.id });
        if (response.status !== 200) return;
        params = response.json.transfer;
    }
    if (!params) return;
    const trigger = painel_instance._trigger;
    const wrapper = document.createElement('div');
    wrapper.innerHTML = painel(mode, params).trim();
    const new_painel = wrapper.firstElementChild;
    new_painel._trigger = trigger;
    painel_instance.replaceWith(new_painel);
    open_close_painel_info();
    adapt_togglers();
    return new_painel;
}

export default refresh_painel;