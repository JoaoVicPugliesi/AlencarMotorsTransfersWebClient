import open_close_profile_interface from "../profile/open_close_profile_interface.js";
import open_close_notifications_interface from "../notifications/open_close_notifications_interface.js";
import view_transfer_interface from "../transfers/view_transfer_interface.js";
import view_observation_interface from "../observations/view_observation_interface.js";
import view_notification_interface from "../notifications/view_notification_interface.js";
import open_close_forms_interface_caller from "../forms/open_close_forms_interface.js";
import header from '../../components/parts/header/header.js'
import profile from '../../components/parts/profile/profile.js'
import notifications from '../../components/parts/notifications/notifications.js'
import transfers from '../../components/parts/transfers/transfers.js'

function login_interface() {
    const page = document.getElementById('page');
    const main = document.getElementById('main');

    const login_confirm = document.getElementById('login-confirm');
    login_confirm.addEventListener('click', () => {
        const login_name = document.getElementById('login-name');
        const login_password = document.getElementById('login-password');
        if(login_name.value === '' || login_password.value === '') {
            console.log('Os campos precisam ser preenchidos'); 
            return;
        }
        const header_i = document.getElementById('header');
        header_i.remove();
        page.insertAdjacentHTML('afterbegin', header(true))
        main.innerHTML = '';
        main.insertAdjacentHTML('beforeend', profile());
        main.insertAdjacentHTML('beforeend', notifications());
        main.insertAdjacentHTML('beforeend', transfers());
        open_close_profile_interface();
        open_close_forms_interface_caller()
        open_close_notifications_interface();
        view_transfer_interface();
        view_observation_interface();
        view_notification_interface();
    });  


}

export default login_interface;