import open_close_profile_interface from "./profile/open_close_profile_interface.js";
import open_close_add_transfer_interface from "./profile/open_close_add_transfer_interface.js";
import open_close_notifications_interface from "./notifications/open_close_notifications_interface.js";
import view_transfer_interface from "./transfers/view_transfer_interface.js";
import view_observation_interface from "./observations/view_observation_interface.js";
import view_notification_interface from "./notifications/view_notification_interface.js";


function use_cases_caller () {
    open_close_profile_interface();
    open_close_add_transfer_interface();
    open_close_notifications_interface();
    view_transfer_interface();
    view_observation_interface();
    view_notification_interface();
}

export default use_cases_caller;