import delete_transfer from "../../../server/use_cases/transfers/delete_transfer.js";
import get_transfers_interface from "../get_transfers_interface/get_transfers_interface.js";

async function delete_transfer_interface (command_i) {
    console.log(command_i);
    const main = document.querySelector('#main');
    console.log(main);
    const form_i = main.lastElementChild;
    const painel_i = command_i.closest('.painel');
    const user = JSON.parse(localStorage.getItem('user'));
    const transfers_display = document.querySelector('.transfers-display');
    if(!painel_i) return;
    const ids_i = JSON.parse(painel_i.dataset.ids);
    const params_i = JSON.parse(painel_i.dataset.params);
    if(!ids_i || !params_i) {
        window.alert('Painel não existe');
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
            username: user.username,
            password: password.value,
            transfer_id: ids_i.id
        }
        const { status, json } = await delete_transfer(params);
        console.log(json);
        if(status !== 200) {
            window.alert('Falhou ao deletar');
            return;
        }
        get_transfers_interface();
        painel_i.remove();
        form_i.remove();
        window.alert('Transferência deletada');
    });

    console.log(password);
    console.log(command);
}

export default delete_transfer_interface;