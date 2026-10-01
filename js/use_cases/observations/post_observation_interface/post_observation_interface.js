import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import post_observation from '../../../server/use_cases/observations/post_observation.js';
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import get_observations_interface from '../get_observations_interface/get_observations_interface.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';

async function post_observation_interface (command_i) {
    const main = document.getElementById('main');
    console.log(main);
    const form_i = main.lastElementChild;
    console.log(form_i);
    const painel = command_i.closest('.painel');
    if(!painel || !form_i) return;
    console.log(painel);
    const ids = JSON.parse(painel.dataset.ids);
    const title = form_i.querySelector('#add-observation-title');
    const description = form_i.querySelector('#add-observation-description');
    const command = form_i.querySelector('#add-observation-add');

    command.addEventListener('click', async (e) => {
        if(!title.value || !description.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const { status: tr_status, json: tr_json } = await get_transfer({ id: ids.id });
        if(tr_status !== 200) {
            window.alert('Transferência não existe');
            return;
        }
        const { transfer } = tr_json;

        const params = {
            transfer_id: transfer.id,
            title: title.value,
            description: description.value,
            initial_date: set_timestamp(new Date()),
            term_date: transfer.term_date
        }

        console.log(params);
        const { status: ob_status, json: ob_json } = await post_observation(params);

        if(ob_status !== 201) return;

        const observations_display = painel.querySelector('#painel-related-observations-display');
        console.log(observations_display);
        const { status: obs_status, json: obs_json } = await get_observations({
            id: transfer.id
        });
        console.log(obs_json);
        if(obs_status !== 200) {
            window.alert('Sem observações');
            return;
        }
        const { observations } = obs_json;
        observations_display.innerHTML = '';
        observations_display.innerHTML = get_observations_interface(observations);
        form_i.remove();
        window.alert(ob_json.message);
    });
}

export default post_observation_interface;