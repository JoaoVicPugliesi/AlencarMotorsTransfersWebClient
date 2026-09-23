import open_close_notifications from "./notifications/open_close_notifications.js";
import open_close_profile from "./profile/open_close_profile.js";
import open_close_transfers from "./transfers/open_close_transfers.js";

function use_cases_caller () {
    open_close_profile();
    open_close_notifications();
    open_close_transfers();
}

export default use_cases_caller;