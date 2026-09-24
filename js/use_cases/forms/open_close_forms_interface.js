import add_profile from '../../components/parts/forms/add_profile/add_profile.js';
import add_transfer from '../../components/parts/forms/add_transfer/add_transfer.js';
import edit_profile from '../../components/parts/forms/edit_profile/edit_profile.js';
import adapt_togglers from '../../helpers/adapt_togglers.js';

function open_close_forms_interface(add, comeback, callback) {

    const main = document.getElementById('main');
    const command_i = document.getElementById(add);

    command_i.addEventListener('click', () => {
        if (command_i.dataset.already_opened === 'true') return;
        command_i.dataset.already_opened = 'true';
        const component = callback();
        main.insertAdjacentHTML('beforeend', component);
        console.log(main);
        adapt_togglers();
    });


    document.addEventListener('click', (event) => {
        const comeback_i = event.target.closest(`#${comeback}`);
        if (!comeback_i) return;
        if (command_i.dataset.already_opened !== 'true') return;
        command_i.dataset.already_opened = 'false';
        const element = comeback_i.closest('.form-holder');
        if (element) {
            element.remove();
        }
        adapt_togglers();
    });
}


function open_close_forms_interface_caller() {

    open_close_forms_interface(
        'profile-options-add-transfer',
        'add-transfer-comeback',
        add_transfer
    );
    
    open_close_forms_interface(
        'profile-options-add-profile',
        'add-profile-comeback',
        add_profile
    );
    
    open_close_forms_interface(
        'profile-options-edit-profile',
        'edit-profile-comeback',
        edit_profile 
    );
}


export default open_close_forms_interface_caller;