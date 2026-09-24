import painel from "../../components/parts/painel/painel.js";
import adapt_togglers from "../../helpers/adapt_togglers.js";

const painel_cases = new Map();

function open_close_painel(params) { painel_cases.set(params.trigger, params); }

document.addEventListener('click', (e) => {
    for (const [trigger, params] of painel_cases) {
        const element = e.target.closest(trigger);
        if (!element) continue;
        const already_opened = element.dataset.already_opened;
        if (already_opened === 'true') return;
        element.dataset.already_opened = 'true';
        const { mode, data, get_data } = params;
        const main = document.getElementById('main');
        if (!main) return;
        const painel_data = get_data ? get_data(element) : data;
        main.insertAdjacentHTML(
            'beforeend',
            painel(mode, painel_data)       
        );
        adapt_togglers();
        const painel_instance = main.lastElementChild;
        const comeback = painel_instance.querySelector(`#${mode}-comeback`);
        if (!comeback) return;
        comeback.addEventListener('click', () => {
            painel_instance.remove()
            element.dataset.already_opened = 'false';
            adapt_togglers();
        }, { once: true });     
    }   
});



export default open_close_painel;