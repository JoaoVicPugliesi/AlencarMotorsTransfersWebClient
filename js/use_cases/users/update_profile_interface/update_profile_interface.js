import update_profile from "../../../server/use_cases/users/update_profile.js";

function update_profile_interface() {
    const user_i = JSON.parse(localStorage.getItem('user'));
    const username_i = document.getElementById('edit-profile-username');
    username_i.value = user_i.username;
    const command = document.getElementById('edit-profile-save');
    command.addEventListener('click', async () => {
        if(!username_i.value) {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const { status, json } = await update_profile({
            id: user_i.id,
            username: username_i.value,
        });
        if(status !== 200) return;
        const { user } = json;
        username_i.value = '';
        const profile_username = document.querySelector('#profile-info-name');
        const header_username = document.querySelector('#header-username');
        localStorage.setItem('user', JSON.stringify(user));
        profile_username.innerHTML = `<h3>${user.username}</h3>`;
        header_username.innerHTML = `<h3>${user.username}</h3>`;
        window.alert('Usuário Editado');
    });
}

export default update_profile_interface;