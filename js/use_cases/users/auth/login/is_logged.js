import { show_application, show_login } from "../auth_ui.js";

function is_logged() {
    const user = JSON.parse(
        localStorage.getItem('user')
    );
    if (!user) {
        show_login();
        return false;
    }
    show_application();
    return true;
}

export default is_logged;