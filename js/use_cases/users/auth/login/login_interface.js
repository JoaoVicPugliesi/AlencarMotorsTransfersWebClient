import login from '../../../../server/use_cases/users/login.js';

function login_interface() {
    const login_confirm = document.getElementById('login-confirm');
    if (!login_confirm) return;
    login_confirm.addEventListener('click', async () => {
        const username = document.getElementById('login-name');
        const password = document.getElementById('login-password');
        if (username.value === '' || password.value === '') {
            window.alert('Campos precisam ser preenchidos');
            return;
        }
        const { status, json } = await login({
            username: username.value,
            password: password.value
        });
        if (status !== 200) {
            window.alert(json.message);
            return;
        }
        const { user } = json;
        localStorage.setItem('user', JSON.stringify(user));
        window.dispatchEvent(new CustomEvent('user-login'));
    });

}

export default login_interface;