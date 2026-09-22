import login_form from "./parts/login_form.js";

function login() {
    return `
        <div class="login">
            ${login_form()}
        </div>
    `
}

export default login;