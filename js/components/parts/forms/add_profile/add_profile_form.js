import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";
import select_input from "../../../helpers/inputs/select_input.js";

function add_profile_form () {
    const content = `
        ${primary_input('add-profile-username', 'Nome de Usuário', 25, 'fa-solid fa-user')}
        ${primary_input('add-profile-password', 'Senha', 12, 'fa-solid fa-key')}
        ${select_input('add-profile-role', [
            {
                value: 'admin',
                label: 'Administradora'
            },
            {
                value: 'user',
                label: 'Usuário'
            },
        ])}
        <div class="form-options">
            ${button('add-profile-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('add-profile-add', 'fa-solid fa-plus', 'Adicionar', 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default add_profile_form;