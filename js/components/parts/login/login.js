import button from "../../helpers/button.js";
import input from "../../helpers/input.js";

function login() {
    return `
        <div class="login">
        <div class="login-form">
                <div class="login-title">
                    <h3>Entre Na Sua Conta</h3>
                </div>
                ${input('login-name-input', 'Nome De Usuário', 'fa-solid fa-id-card')}
                ${input('login-password-input', 'Senha', 'fa-solid fa-key')}
                ${button('login-command', 'fa-solid fa-right-to-bracket', 'Entrar', 'blue    ')}
            </div>
            
        </div>
    `
}

export default login;