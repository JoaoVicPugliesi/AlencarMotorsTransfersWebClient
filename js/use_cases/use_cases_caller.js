import { show_application, show_login } from './users/auth/auth_ui.js';
import is_logged from './users/auth/login/is_logged.js';

function use_cases_caller() {
    window.addEventListener('user-login', () => {
        show_application();
    });
    window.addEventListener('user-logout', () => {
        show_login();
    });
    is_logged();
}

export default use_cases_caller;