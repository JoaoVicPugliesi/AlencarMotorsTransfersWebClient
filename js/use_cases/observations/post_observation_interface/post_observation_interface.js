import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import post_observation from '../../../server/use_cases/observations/post_observation.js';
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import get_observations_interface from '../get_observations_interface/get_observations_interface.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';
import painel from '../../../components/parts/painel/painel.js';

async function post_observation_interface(command_i) {
    const main = document.getElementById('main');
    const form_i = main.lastElementChild;
    const painel_i = command_i.closest('.painel');
    if (!painel_i || !form_i) return;
    const ids = JSON.parse(painel_i.dataset.ids);
    const title = form_i.querySelector('#add-observation-title');
    const description = form_i.querySelector('#add-observation-description');
    const command = form_i.querySelector('#add-observation-add');

    command.addEventListener('click', async (e) => {
        if (!title.value || !description.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const { status: tr_status, json: tr_json } = await get_transfer({ id: ids.id });
        if (tr_status !== 200) {
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

        const { status: ob_status, json: ob_json } = await post_observation(params);

        if (ob_status !== 201) return;

        const { status: obs_status, json: obs_json } = await get_observations({
            id: transfer.id
        });
        if (obs_status !== 200) {
            window.alert('Sem observações');
            return;
        }
        const { observations } = obs_json;
        let pending_observations = [];
        let concluded_observations = [];
        if (observations) {
            pending_observations = observations.filter((ob) => ob.status === 'pending');
            concluded_observations = observations.filter((ob) => ob.status === 'concluded');
        }
        const transfer_i = JSON.parse(painel_i.dataset.params);
        const params_i = {
            ...transfer_i,
            pending_observations: pending_obervations.length > 0 ? pending_obervations.length : '0',
            concluded_observations: concluded_obervations.length > 0 ? concluded_obervations.length : '0',
            observations: observations ? [
                ...observations
            ] : null
        }

        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', params_i)
        )
        painel_i.remove();
        form_i.remove();
        window.alert(ob_json.message);
    });
}

export default post_observation_interface;