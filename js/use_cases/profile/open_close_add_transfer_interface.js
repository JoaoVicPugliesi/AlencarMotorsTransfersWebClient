import adapt_togglers from "../../helpers/adapt_togglers.js";

function open_add_transfer_interface() {
    const add = document.getElementById('profile-options-add-transfer');
    const add_transfer = document.querySelector('.add-transfer');
    add.addEventListener('click', () => {
        if (add_transfer.classList.contains('opened')) return;
        add_transfer.classList.add('opened');
        close_add_transfer_interface();
        adapt_togglers();
    });
}
function close_add_transfer_interface() {
    const comeback = document.getElementById('add-transfer-comeback');
    const add_transfer = document.querySelector('.add-transfer');
    comeback.addEventListener('click', () => {
        add_transfer.classList.remove('opened');
        adapt_togglers();
    });
}
function open_close_add_transfer_interface() {
    open_add_transfer_interface();
}

export default open_close_add_transfer_interface;