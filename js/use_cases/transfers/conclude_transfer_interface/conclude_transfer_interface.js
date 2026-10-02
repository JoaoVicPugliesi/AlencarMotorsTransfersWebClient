import painel from "../../../components/parts/painel/painel.js";
import set_timestamp from "../../../helpers/timestamp/set_timestamp.js";
import get_observations from '../../../server/use_cases/observations/get_observations.js'
import conclude_transfer from "../../../server/use_cases/transfers/conclude_transfer.js";

async function conclude_transfer_interface (command_i) {
    let main = document.querySelector('#main');
    let painel_i = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    const user_i = JSON.parse(localStorage.getItem('user'));
    const ids_i = JSON.parse(painel_i.dataset.ids);
    if(!painel_i || !form_i || !user_i || !ids_i) {
        window.alert('Erro');
        return;
    }
    const password = form_i.querySelector('#confirm-password');
    const command = form_i.querySelector('#confirm-command');

    command.addEventListener('click', async () => {
        if(!password.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const params = {
            id: ids_i.id,
            final_date: set_timestamp(new Date()),
            username: user_i.username,
            password: password.value
        }
        const { status: c_status, json: c_json } = await conclude_transfer(params);
        const { message: c_message, transfer: c_transfer } = c_json;
        if(c_status !== 200) {
            window.alert(`${c_message}`);
            return;
        }
        form_i.remove();
        painel_i.remove();
        const {
            json: obs_json
        } = await get_observations({
            id: c_transfer.id
        });
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
            ...c_transfer,
            pending_observations: pending_observations.length,
            concluded_observations: concluded_observations.length,
            observations: observations ?? null
        };

        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', updated_params)
        );
        window.alert(`${c_message}`);
    });
}

export default conclude_transfer_interface;