import show_application from "../../helpers/show_application.js";
import show_login from "../../helpers/show_login.js";

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