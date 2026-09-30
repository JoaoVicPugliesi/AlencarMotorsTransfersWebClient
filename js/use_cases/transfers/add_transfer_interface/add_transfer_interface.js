import code_generator from "../../../helpers/code_generator.js";
import set_timestamp from "../../../helpers/set_timestamp.js";
import get_transfers from "../../../server/use_cases/transfers/get_transfers.js";
import post_transfer from "../../../server/use_cases/transfers/post_transfer.js";
import get_transfers_interface from "../get_transfers_interface/get_transfers_interface.js";
import search_participants_options from "./helpers/search_participants_options.js";
import select_participant_option from "./helpers/select_participant_option.js";

async function add_transfer_interface() {
    search_participants_options();
    select_participant_option();
    const command = document.getElementById('add-transfer-command');
    command.addEventListener('click', async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        const name_i = document.getElementById('add-transfer-name');
        const plate_i = document.getElementById('add-transfer-plate');
        const vehicle_i = document.getElementById('add-transfer-vehicle');
        const participants = JSON.parse(localStorage.getItem('participants')) || [];
        const participants_options = document.querySelector('.form-participants-options');
        if (!name_i.value || !plate_i.value || !vehicle_i.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        if (participants.length === 0) {
            window.alert('Você adicionar pelo menos uma pessoa para te ajudar');
            return;
        }
        participants.unshift(user.id);
        const now = new Date();
        const initial_date = set_timestamp(now);
        const default_term = new Date(now.getTime() + 15 * 24 * 60 * 60 * 1000);
        const term_date = set_timestamp(default_term);
        const code = code_generator();
        const params = {
            name: name_i.value.toUpperCase(),
            plate: plate_i.value.toUpperCase(),
            vehicle: vehicle_i.value.toUpperCase(),
            code: code,
            initial_date: initial_date,
            term_date: term_date,
            participants: participants,
            created_by: user.username,
        };
        const { status, json } = await post_transfer(params);

        if (status !== 201) {
            window.alert(`${json.message}`);
            return;
        }
        window.alert(`${json.message}`);
        localStorage.setItem('participants', JSON.stringify([]));
        participants_options.classList.remove('searched');
        name_i.value = '';
        plate_i.value = '';
        vehicle_i.value = '';
        const transfers = await get_transfers({ id: user.id });
        console.log(transfers);
        if (transfers.status === 200) {
            localStorage.setItem('transfers', JSON.stringify(transfers.json.transfers));
            get_transfers_interface();
        }
    });
}

export default add_transfer_interface;