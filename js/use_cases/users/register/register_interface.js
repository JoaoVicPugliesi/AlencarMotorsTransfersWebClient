import register from "../../../server/use_cases/users/register.js";

function register_interface() {
    const username = document.getElementById('add-profile-username');
    const password = document.getElementById('add-profile-password');
    const role = document.getElementById('add-profile-role');
    const command = document.getElementById('add-profile-command');
    command.addEventListener('click', async () => {
        if(username.value === '' || password.value === '' || role.value === '') {
            console.log('Os campos precisam ser preenchidos');
            return;
        }
        const response = await register({
            username: username.value,
            password: password.value,
            role: role.value
        });
        
        if(response.status !== 201) {
            console.log(response.json.message);
            return;
        }

        window.alert('Usuário Criado');

        username.value = '';
        password.value = '';
        role.value = 'admin';
    });
}

export default register_interface;