import painel from "../../../components/parts/painel/painel.js";
import get_observations from '../../../server/use_cases/observations/get_observations.js';
import update_transfer from "../../../server/use_cases/transfers/update_transfer.js";
import get_transfers_interface from "../get_transfers_interface/get_transfers_interface.js";

async function update_transfer_interface(command_i) {

    const main = document.querySelector('#main');
    const painel_i = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    const user_i = JSON.parse(localStorage.getItem('user'));

    if (!painel_i || !form_i || !user_i) {
        window.alert('Erro');
        return;
    }

    const ids_i = JSON.parse(painel_i.dataset.ids);
    const params_i = JSON.parse(painel_i.dataset.params);

    if (!ids_i) {
        window.alert('Erro');
        return;
    }

    const name = form_i.querySelector('#edit-transfer-name');
    const plate = form_i.querySelector('#edit-transfer-plate');
    const vehicle = form_i.querySelector('#edit-transfer-vehicle');
    name.value = params_i.name;
    plate.value = params_i.plate;
    vehicle.value = params_i.vehicle;
    const command = form_i.querySelector('#edit-transfer-save');

    command.addEventListener('click', async () => {
        if (!name.value || !plate.value || !vehicle.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }

        const params = {
            id: ids_i.id,
            name: name.value,
            plate: plate.value,
            vehicle: vehicle.value 
        };

        const {
            status: c_status,
            json: c_json
        } = await update_transfer(params);

        const {
            message: c_message,
            transfer: c_transfer
        } = c_json;

        if (c_status !== 200) {
            window.alert(c_message);
            return;
        }
        const trigger = painel_i._trigger;
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
        const new_painel = main.lastElementChild;
        new_painel._trigger = trigger;
        await get_transfers_interface();
        window.alert(c_message);
    });
}

export default update_transfer_interface;