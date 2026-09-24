import button from "../../../../../helpers/button.js";
import primary_input from "../../../../../helpers/inputs/primary_input.js";
import select_input from "../../../../../helpers/inputs/select_input.js";
import profile_form from "../parts/profile_form.js";

function edit_profile_form () {
    const content = `
        ${primary_input('edit-profile-username', 'Nome de Usuário', 25, 'fa-solid fa-user', 'Natália Alencar')}
        ${select_input('edit-profile-role', [
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
            ${button('edit-profile-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('edit-profile-save', 'fa-solid fa-plus', 'Editar', 'green')}
        </div>
    `
    return `
        ${profile_form(content)}
    `
}

export default edit_profile_form;