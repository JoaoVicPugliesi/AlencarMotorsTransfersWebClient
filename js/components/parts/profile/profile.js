import button from "../../helpers/button.js";

function profile () {
    return `
        <div id="profile">
            <div id="profile-title">
                <h3>Perfil</h3>
            </div>
            <div id="profile-info">
                <div id="profile-info-icon"><i class="fa-solid fa-circle-user"></i></div>
                <div id="profile-info-name"><h3>Natália Alencar</h3></div>
                <div id="profile-info-role"><h3>Administradora</h3></div>
            </div>
            <div id="profile-options">
                <div>
                    <h3>Opções</h3>
                </div>
                <div id="profile-options-commands">
                    ${button('profile-options-edit-profile', 'fa-solid fa-pen-to-square', 'Editar Perfil', 'blue')}
                    ${button('profile-options-add-profile', 'fa-solid fa-plus', 'Novo Perfil', 'green')}
                    ${button('profile-options-add-transfer', 'fa-solid fa-plus', 'Transferência', 'green')}
                    ${button('profile-options-logout', 'fa-solid fa-right-from-bracket', 'Sair', 'red')}
                </div>
            </div>
        </div>
    `
}

export default profile;
