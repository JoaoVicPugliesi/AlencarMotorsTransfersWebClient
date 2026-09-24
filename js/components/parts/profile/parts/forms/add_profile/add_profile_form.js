import button from "../../../../../helpers/button.js";
import primary_input from "../../../../../helpers/inputs/primary_input.js";
import select_input from "../../../../../helpers/inputs/select_input.js";
import profile_form from "../parts/profile_form.js";

function add_profile_form () {
    const content = `
        ${primary_input('add-profile-username', 'Nome de Usuário', 25, 'fa-solid fa-user')}
        ${primary_input('add-profile-password', 'Senha', 8, 'fa-solid fa-key')}
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
        <div class="profile-form-options">
            ${button('add-profile-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('add-profile-add', 'fa-solid fa-plus', 'Adicionar', 'green')}
        </div>
    `
    return `
        ${profile_form('add-profile-form', content)}
    `
}

export default add_profile_form;