import add_observation from '../../components/parts/forms/add_observation/add_observation.js';
import add_profile from '../../components/parts/forms/add_profile/add_profile.js';
import add_transfer from '../../components/parts/forms/add_transfer/add_transfer.js';
import confirm_f from '../../components/parts/forms/confirm/confirm.js';
import edit_observation from '../../components/parts/forms/edit_observation/edit_observation.js';
import edit_profile from '../../components/parts/forms/edit_profile/edit_profile.js';
import edit_transfer from '../../components/parts/forms/edit_transfer/edit_transfer.js';
import adapt_togglers from '../../helpers/adapt_togglers.js';

const form_cases = new Map();
const form_commands = new WeakMap();

function open_close_forms_interface(add, comeback, callback) {
    form_cases.set(add, {
        add,
        comeback,
        callback
    });
}

document.addEventListener('click', (event) => {
    for (const [add, params] of form_cases) {
        const command_i = event.target.closest(`#${add}`);
        if (!command_i) continue;
        if (command_i.dataset.already_opened === 'true') {
            return;
        }
        const main = document.getElementById('main');
        if (!main) return;
        command_i.dataset.already_opened = 'true';
        const component = params.callback();
        main.insertAdjacentHTML(
            'beforeend',
            component
        );
        const form = main.lastElementChild;
        form_commands.set(form, command_i);
        adapt_togglers();
        return;
    }

});

document.addEventListener('click', (event) => {
    for (const [, params] of form_cases) {
        const comeback_i = event.target.closest(
            `#${params.comeback}`
        );
        if (!comeback_i) continue;
        const form = comeback_i.closest('.form-holder');
        if (!form) return;
        const command_i = form_commands.get(form);
        if (command_i) {
            command_i.dataset.already_opened = 'false';
        }
        form.remove();
        adapt_togglers();
        return;
    }
});

function open_close_forms_interface_caller() {

    open_close_forms_interface(
        'profile-options-add-transfer',
        'add-transfer-comeback',
        add_transfer
    );
    open_close_forms_interface(
        'transfers-edit',
        'edit-transfer-comeback',
        edit_transfer
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
    open_close_forms_interface(
        'transfers-add-observation',
        'add-observation-comeback',
        add_observation
    );
    open_close_forms_interface(
        'observations-edit',
        'edit-observation-comeback',
        edit_observation
    );
    open_close_forms_interface(
        'transfers-conclude',
        'confirm-comeback',
        confirm_f
    );
    open_close_forms_interface(
        'transfers-exclude',
        'confirm-comeback',
        confirm_f
    );
  
    open_close_forms_interface(
        'observations-conclude',
        'confirm-comeback',
        confirm_f
    );
    open_close_forms_interface(
        'observations-exclude',
        'confirm-comeback',
        confirm_f
    );
  
}


export default open_close_forms_interface_caller;