import { close_user_notifications_channel } from "../../../../server/use_cases/notifications/channel_user_notifications.js";
import clear_application from "./helpers/clear_application.js";

function logout_interface() {
    const logout_confirm = document.getElementById('profile-options-logout');
    if (!logout_confirm) return;
    logout_confirm.addEventListener('click', () => {
        close_user_notifications_channel();
        clear_application();
        window.dispatchEvent(new CustomEvent('user-logout'));
    });

}

export default logout_interface;