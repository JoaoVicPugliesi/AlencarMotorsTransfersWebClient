import toggle_primary_input_eye from "../helpers/toggle_primary_input_eye.js";
import login_interface from "./users/login/login_interface.js";

function use_cases_caller () {
    login_interface();
    toggle_primary_input_eye();
}

export default use_cases_caller;