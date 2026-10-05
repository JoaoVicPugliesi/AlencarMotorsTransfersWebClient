import header from "../../../components/parts/header/header.js";
import profile from "../../../components/parts/profile/profile.js";
import notifications from "../../../components/parts/notifications/notifications.js";
import transfers from "../../../components/parts/transfers/transfers.js";
import set_bell_number from "../../../helpers/set_bell_number.js";
import start_timestamp_ago_counter from "../../../helpers/timestamp/update_timestamp_ago.js";
import { channel_user_notifications, close_user_notifications_channel } from "../../../server/use_cases/notifications/channel_user_notifications.js";
import get_users from "../../../server/use_cases/users/get_users.js";
import open_close_forms_interface_caller from "../../forms/open_close_forms_interface.js";
import get_notification_interface from "../../notifications/get_notification_interface/get_notification_interface.js";
import get_notifications_interface from "../../notifications/get_notifications_interface/get_notifications_interface.js";
import open_close_notifications_interface from "../../notifications/open_close_notifications_interface.js";
import get_observation_interface from "../../observations/get_observation_interface/get_observation_interface.js";
import open_close_profile_interface from "../../profile/open_close_profile_interface.js";
import get_transfer_interface from "../../transfers/get_transfer_interface/get_transfer_interface.js";
import get_transfers_interface from "../../transfers/get_transfers_interface/get_transfers_interface.js";
import search_transfers_interface from "../../transfers/search_transfers_interface.js";
import logout_interface from "../auth/logout/logout_interface.js";
import clear_application from "./clear_application.js";
import { get_current_user } from "./get_current_user.js";

async function show_application() {
    const page = document.getElementById('page');
    const main = document.getElementById('main');
    clear_application();
    page.insertAdjacentHTML('afterbegin', header(true));
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
    close_user_notifications_channel();
    channel_user_notifications();
    const user = get_current_user()
    const { json } = await get_users({
        username: user.username
    });
    const { users } = json;
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('participants', JSON.stringify([]));
    localStorage.setItem('bell_number', 0);
    set_bell_number();
    await get_notifications_interface();
    start_timestamp_ago_counter();
}

export default show_application;