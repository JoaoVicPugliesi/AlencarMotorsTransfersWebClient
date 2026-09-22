import title from "../../../helpers/title.js";
import input from "../../../helpers/input.js";
import button from "../../../helpers/button.js";

function login_form () {
    return `
    <div class="login-form">
        ${title('main-title', 'Entre na sua conta')}
        ${input('login-name-input', 'Nome De Usuário', 15, 'fa-solid fa-id-card')}
        ${input('login-password-input', 'Senha', 8, 'fa-solid fa-key')}
        ${button('login-command', 'fa-solid fa-right-to-bracket', 'Entrar', 'blue    ')}
    </div>
    `
}

export default login_form;