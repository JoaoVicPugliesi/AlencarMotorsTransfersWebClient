import painel from "../../../components/parts/painel/painel.js";
import set_timestamp from "../../../helpers/timestamp/set_timestamp.js";
import conclude_observation from "../../../server/use_cases/observations/conclude_observation.js";
import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import get_observations from '../../../server/use_cases/observations/get_observations.js';

async function conclude_observation_interface(command_i) {

    const main = document.querySelector('#main');

    const observation_painel = command_i.closest('.painel');
    const form_i = main.lastElementChild;

    const user_i = JSON.parse(localStorage.getItem('user'));

    if (!observation_painel || !form_i || !user_i) {
        window.alert('Erro');
        return;
    }

    const ids_i = JSON.parse(observation_painel.dataset.ids);

    if (!ids_i) {
        window.alert('Erro');
        return;
    }

    const password = form_i.querySelector('#confirm-password');
    const command = form_i.querySelector('#confirm-command');

    command.addEventListener('click', async () => {

        if (!password.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }

        const params = {
            id: ids_i.id,
            final_date: set_timestamp(new Date()),
            username: user_i.username,
            password: password.value
        };

        const {
            status: c_status,
            json: c_json
        } = await conclude_observation(params);

        if (c_status !== 200) {
            window.alert('Erro');
            return;
        }

        const {
            message: c_message,
            observation: c_observation
        } = c_json;
        form_i.remove();
        observation_painel.remove();
        const transfer_painel = main.lastElementChild;

        if (
            !transfer_painel ||
            !transfer_painel.classList.contains('painel')
        ) {
            console.error('Transfer painel not found');
            return;
        }
        const trigger = transfer_painel._trigger;
        transfer_painel.remove();
        const {
            status: tr_status,
            json: tr_json
        } = await get_transfer({
            id: ids_i.transfer_id
        });

        if (tr_status !== 200) {
            window.alert(tr_json.message);
            return;
        }

        const { transfer } = tr_json;
        const {
            status: obs_status,
            json: obs_json
        } = await get_observations({
            id: transfer.id
        });

        if (obs_status !== 200) {
            window.alert(obs_json.message);
            return;
        }

        const { observations } = obs_json;

        const pending_observations =
            observations?.filter(
                ob => ob.status === 'pending'
            ) ?? [];

        const concluded_observations =
            observations?.filter(
                ob => ob.status === 'concluded'
            ) ?? [];
        const updated_params = {
            ...transfer,
            pending_observations: pending_observations.length,
            concluded_observations: concluded_observations.length,
            observations: observations ?? null
        };
        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', updated_params)
        );

        const new_transfer_painel = main.lastElementChild;

        new_transfer_painel._trigger = trigger;
        main.insertAdjacentHTML(
            'beforeend',
            painel('observations', c_observation)
        );

        const new_observation_painel = main.lastElementChild;
        new_observation_painel._parent_painel = new_transfer_painel;

        window.alert(c_message);
    });
}

export default conclude_observation_interface;