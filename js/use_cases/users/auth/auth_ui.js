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
import get_transfers_interface from "../../transfers/get_transfers_interface/get_transfers_interface.js";
import search_transfers_interface from "../../transfers/search_transfers_interface.js";
import get_transfer_interface from "../../transfers/get_transfer_interface/get_transfer_interface.js";
import get_observation_interface from "../../observations/get_observation_interface/get_observation_interface.js";
import channel_user_notifications from '../../../server/use_cases/notifications/channel_user_notifications.js'
import set_bell_number from "../../../helpers/set_bell_number.js";
import get_notifications_interface from "../../notifications/get_notifications_interface/get_notifications_interface.js";
import get_notification_interface from "../../notifications/get_notification_interface/get_notification_interface.js";
import start_timestamp_ago_counter from "../../../helpers/timestamp/update_timestamp_ago.js";

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

async function show_application() {
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
    get_transfer_interface();
    get_observation_interface();
    get_notification_interface();
    await get_transfers_interface();
    search_transfers_interface();
    channel_user_notifications();
    localStorage.setItem('participants', JSON.stringify([]));
    localStorage.setItem('bell_number', 0);
    set_bell_number();
    await get_notifications_interface();
    start_timestamp_ago_counter();
}

export {
    show_login,
    show_application
};