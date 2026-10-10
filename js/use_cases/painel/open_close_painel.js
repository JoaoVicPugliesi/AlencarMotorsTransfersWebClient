import painel from "../../components/parts/painel/painel.js";
import adapt_togglers from "../../helpers/adapt_togglers.js";
import update_timestamp_ago_counter from '../../helpers/timestamp/update_timestamp_ago.js';

const painel_cases = new Map();

function open_close_painel(params) {
    painel_cases.set(params.trigger, params);
}

document.addEventListener('click', async (e) => {
    const comeback = e.target.closest('#transfers-comeback, #observations-comeback');
    if (comeback) {
        const painel_instance = comeback.closest('.painel');
        if (!painel_instance) return;
        const trigger = painel_instance._trigger;
        painel_instance.remove();
        if (trigger) trigger.dataset.already_opened = 'false';
        adapt_togglers();
        return;
    }
    for (const [trigger, params] of painel_cases) {
        const el = e.target.closest(trigger);
        if (!el) continue;
        const already_opened = el.dataset.already_opened;
        if (already_opened === 'true') return;
        el.dataset.already_opened = 'true';
        const { mode, data, get_data } = params;
        const main = document.getElementById('main');
        if (!main) return;
        const painel_data = get_data
            ? await get_data(el)
            : data;
        main.insertAdjacentHTML(
            'beforeend',
            painel(mode, painel_data)
        );
        const painel_instance = main.lastElementChild;
        painel_instance._trigger = el;
        const timestamps = document.querySelectorAll('.timestamp-ago');
        if (timestamps.length) update_timestamp_ago_counter();
        adapt_togglers();
        return;
    }
});

export default open_close_painel;