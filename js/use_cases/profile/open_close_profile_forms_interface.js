import adapt_togglers from '../../helpers/adapt_togglers.js';

function open_close_profile_forms_interface (add, comeback, form_id) {
    const command_i = document.getElementById(add);
    const comeback_i = document.getElementById(comeback);

    const profile_form = document.getElementById(form_id);
    const profile_form_holder = profile_form.closest('.profile-form-holder');

    command_i.addEventListener('click', () => {
        if (profile_form_holder.classList.contains('opened')) return;
        profile_form_holder.classList.add('opened');
        adapt_togglers();
    });

    comeback_i.addEventListener('click', () => {
        if (!profile_form_holder.classList.contains('opened')) return;
        profile_form_holder.classList.remove('opened');
        adapt_togglers();
    });
}

function open_close_profile_forms_interface_caller () {
    open_close_profile_forms_interface('profile-options-add-transfer', 'add-transfer-comeback', 'add-transfer-form');
    open_close_profile_forms_interface('profile-options-add-profile', 'add-profile-comeback', 'add-profile-form');
}

export default open_close_profile_forms_interface_caller;