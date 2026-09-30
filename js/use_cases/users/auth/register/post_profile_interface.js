import register from "../../../../server/use_cases/users/register.js";

function post_profile_interface() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const username_i = document.getElementById('add-profile-username');
    const password_i = document.getElementById('add-profile-password');
    const role_i = document.getElementById('add-profile-role');
    const command = document.getElementById('add-profile-command');
    command.addEventListener('click', async () => {
        if(username_i.value === '' || password_i.value === '' || role_i.value === '') {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const { status, json } = await register({
            username: username_i.value,
            password: password_i.value,
            role: role_i.value,
            admin_username: user.username
        });
        if(status !== 201) return;
        window.alert('Usuário Criado');
        username_i.value = '';
        password_i.value = '';
        role_i.value = 'admin';
    });
}

export default post_profile_interface;