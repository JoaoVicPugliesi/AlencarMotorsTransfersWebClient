import title from "../../../helpers/title.js";
import primary_input from "../../../helpers/inputs/primary_input.js";
import button from "../../../helpers/button.js";

function login_form () {
    return `
    <div class="login-form">
        ${title('main-title', 'Entre na sua conta')}
        ${primary_input('login-name', 'Nome De Usuário', 15, 'fa-solid fa-id-card')}
        ${primary_input('login-password', 'Senha', 12, 'fa-solid fa-key')}
        ${button('login-confirm', 'fa-solid fa-right-to-bracket', 'Entrar', 'blue    ')}
    </div>
    `
}

export default login_form;