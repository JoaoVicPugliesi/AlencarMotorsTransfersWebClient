import show_message from '../../../../helpers/messages/show_message.js';
import login from '../../../../server/use_cases/users/login.js';
import { set_current_user } from '../../helpers/get_current_user.js';

function login_interface() {
    const login_confirm = document.getElementById('login-confirm');
    if (!login_confirm) return;
    login_confirm.addEventListener('click', async () => {
        const username = document.getElementById('login-name');
        const password = document.getElementById('login-password');

        if (!username.value || !password.value) {
            show_message(
                'error',
                'Os campos precisam ser preenchidos'
            );
            return;
        }
        const loading_message = show_message(
            'loading',
            'Carregando...'
        )
        const { status, json } = await login({
            username: username.value,
            password: password.value
        });
        if (status !== 200) {
            show_message(
                'error',
                `${json.message}`
            )
            return;
        }
        loading_message.remove();
        const { user } = json;
        set_current_user(user);
        window.dispatchEvent(
            new CustomEvent('user-login')
        );
    });
}

export default login_interface;