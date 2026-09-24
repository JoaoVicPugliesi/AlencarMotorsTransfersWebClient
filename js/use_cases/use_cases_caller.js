import open_close_notifications_interface from "./notifications/open_close_notifications_interface.js";
import open_close_observations_interface from "./observations/open_close_observations_interface.js";
import open_close_profile_interface from "./profile/open_close_profile_interface.js";
import open_close_transfers_interface from "./transfers/open_close_transfers_interface.js";

function use_cases_caller () {
    open_close_profile_interface();
    open_close_notifications_interface();
    open_close_transfers_interface();
}

export default use_cases_caller;