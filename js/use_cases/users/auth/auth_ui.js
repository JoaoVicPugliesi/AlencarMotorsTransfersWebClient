import login from "../../../components/parts/login/login.js";
import login_interface from './login/login_interface.js';
import toggle_primary_input_eye from '../../../helpers/toggle_primary_input_eye.js'
import header from "../../../components/parts/header/header.js";
import profile from "../../../components/parts/profile/profile.js";
import notifications from "../../../components/parts/notifications/notifications.js";
import transfers from "../../../components/parts/transfers/transfers.js";
import logout_interface from "./logout/logout_interface.js";
import open_close_profile_interface from '../../profile/open_close_profile_interface.js';
import open_close_notifications_interface from '../../notifications/open_close_notifications_interface.js';
import open_close_forms_interface_caller from '../../forms/open_close_forms_interface.js';
import view_transfer_interface from '../../transfers/view_transfer_interface.js';
import view_observation_interface from '../../observations/view_observation_interface.js';
import view_notification_interface from '../../notifications/view_notification_interface.js';
import get_transfers_interface from "../../transfers/get_transfers_interface/get_transfers_interface.js";

function clear_application() {
    document.getElementById('header')?.remove();
    document.getElementById('login')?.remove();
    document.querySelector('.profile')?.remove();
    document.querySelector('.notifications')?.remove();
    document.querySelector('.transfers')?.remove();
}

function show_login() {
    const page = document.getElementById('page');
    const main = document.getElementById('main');
    clear_application();
    page.insertAdjacentHTML('afterbegin', header(false));
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', login());
    login_interface();
    toggle_primary_input_eye();
}

function show_application() {
    const page = document.getElementById('page');
    const main = document.getElementById('main');
    clear_application();
    page.insertAdjacentHTML('afterbegin', header(true));
    main.innerHTML = '';
    main.insertAdjacentHTML('beforeend', profile());
    main.insertAdjacentHTML('beforeend', notifications());
    main.insertAdjacentHTML('beforeend', transfers());
    open_close_profile_interface();
    open_close_forms_interface_caller();
    open_close_notifications_interface();
    logout_interface();
    view_transfer_interface();
    view_observation_interface();
    view_notification_interface();
    get_transfers_interface();
    localStorage.setItem('participants', JSON.stringify([]))
}

export {
    show_login,
    show_application
};