import button from '../../../helpers/button.js'
import title from '../../../helpers/title.js';

function profile_options () {
    return `
    <div id="profile-options">
        ${title('toggles-title', 'Opções')}
        <div id="profile-options-commands">
            ${button('profile-options-edit-profile', 'fa-solid fa-pen-to-square', 'Editar Perfil', 'blue')}
            ${button('profile-options-add-profile', 'fa-solid fa-plus', 'Novo Perfil', 'green')}
            ${button('profile-options-add-transfer', 'fa-solid fa-plus', 'Transferência', 'green')}
            ${button('profile-options-logout', 'fa-solid fa-right-from-bracket', 'Sair', 'red')}
        </div>
    </div>
    `
}

export default profile_options;