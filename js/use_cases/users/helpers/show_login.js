import header from "../../../components/parts/header/header.js";
import login from "../../../components/parts/login/login.js";
import toggle_primary_input_eye from "../../../helpers/toggle_primary_input_eye.js";
import login_interface from "../auth/login/login_interface.js";
import clear_application from "./clear_application.js";

function show_login() {
    const main = document.getElementById('main');
    const page = document.getElementById('page');
    clear_application();
    page.insertAdjacentHTML('afterbegin', header(false));
    main.insertAdjacentHTML('beforeend', login());
    login_interface();
    toggle_primary_input_eye();
}

export default show_login;