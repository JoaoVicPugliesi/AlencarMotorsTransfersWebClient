import add_observation from '../../components/parts/forms/add_observation/add_observation.js';
import add_profile from '../../components/parts/forms/add_profile/add_profile.js';
import add_transfer from '../../components/parts/forms/add_transfer/add_transfer.js';
import confirm_f from '../../components/parts/forms/confirm/confirm.js';
import edit_observation from '../../components/parts/forms/edit_observation/edit_observation.js';
import edit_profile from '../../components/parts/forms/edit_profile/edit_profile.js';
import edit_transfer from '../../components/parts/forms/edit_transfer/edit_transfer.js';
import adapt_togglers from '../../helpers/adapt_togglers.js';
import toggle_primary_input_eye from '../../helpers/toggle_primary_input_eye.js';
import conclude_observation_interface from '../observations/conclude_observation_interface/conclude_observation_interface.js';
import delete_observation_interface from '../observations/delete_observation_interface/delete_observation_interface.js';
import post_observation_interface from '../observations/post_observation_interface/post_observation_interface.js';
import conclude_transfer_interface from '../transfers/conclude_transfer_interface/conclude_transfer_interface.js';
import delete_transfer_interface from '../transfers/delete_transfer_interface/delete_transfer_interface.js';
import post_transfer_interface from '../transfers/post_transfer_interfce/post_transfer_interface.js';
import reactivate_transfer_interface from '../transfers/reactivate_transfer_interface/reactivate_transfer_interface.js';
import post_profile_interface from '../users/auth/register/post_profile_interface.js';

const form_cases = new Map();
const form_commands = new WeakMap();

function open_close_forms_interface(add, comeback, callback, use_case) {
    const is_use_case = use_case ? use_case : null;
    form_cases.set(add, {
        add,
        comeback,
        callback,
        use_case: is_use_case
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
        if(params.use_case) {
            params.use_case(command_i);
        }
        toggle_primary_input_eye()
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
        add_transfer,
        post_transfer_interface
    );
    open_close_forms_interface(
        'transfers-edit',
        'edit-transfer-comeback',
        edit_transfer,
        null
    );
    
    open_close_forms_interface(
        'profile-options-add-profile',
        'add-profile-comeback',
        add_profile,
        post_profile_interface
    );
    
    open_close_forms_interface(
        'profile-options-edit-profile',
        'edit-profile-comeback',
        edit_profile,
        null
    );
    open_close_forms_interface(
        'transfers-add-observation',
        'add-observation-comeback',
        add_observation,
        post_observation_interface
    );
    open_close_forms_interface(
        'observations-edit',
        'edit-observation-comeback',
        edit_observation,
        null
    );
    open_close_forms_interface(
        'transfers-conclude',
        'confirm-comeback',
        confirm_f,
        conclude_transfer_interface
    );
    open_close_forms_interface(
        'transfers-exclude',
        'confirm-comeback',
        confirm_f,
        delete_transfer_interface
    );
    open_close_forms_interface(
        'transfers-reactivate',
        'confirm-comeback',
        confirm_f,
        reactivate_transfer_interface
    );
  
    open_close_forms_interface(
        'observations-conclude',
        'confirm-comeback',
        confirm_f,
        conclude_observation_interface
    );
    open_close_forms_interface(
        'observations-exclude',
        'confirm-comeback',
        confirm_f,
        delete_observation_interface
    );
    open_close_forms_interface(
        'observations-reactivate',
        'confirm-comeback',
        confirm_f,
        null
    );
  
}


export default open_close_forms_interface_caller;