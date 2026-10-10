import register from "../../../../server/use_cases/users/register.js";
import show_message from '../../../../helpers/messages/show_message.js';

function post_profile_interface() {
    const user = JSON.parse(localStorage.getItem('user'));
    const username_i = document.getElementById('add-profile-username');
    const password_i = document.getElementById('add-profile-password');
    const role_i = document.getElementById('add-profile-role');
    const command = document.getElementById('add-profile-command');
    command.addEventListener('click', async () => {
        if(username_i.value === '' || password_i.value === '' || role_i.value === '') {
            show_message(
                'error',
                'Os campos precisam ser preenchidos'
            )
            return;
        }
        const loading_message = show_message(
            'loading',
            'Adicionando perfil...'
        )
        const { status, json } = await register({
            username: username_i.value,
            password: password_i.value,
            role: role_i.value,
            admin_username: user.username
        });
        if(status !== 201) {
            show_message('error', 'Error ao adicionar perfil');
            loading_message.remove();
            return;
        };
        username_i.value = '';
        password_i.value = '';
        role_i.value = 'admin';
        loading_message.remove();
        show_message(
            'success',
            'Perfil criado com sucesso'
        );
    });
}

export default post_profile_interface;