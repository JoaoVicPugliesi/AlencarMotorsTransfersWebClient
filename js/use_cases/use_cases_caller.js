import is_logged from './users/auth/login/is_logged.js';
import show_application from './users/helpers/show_application.js';
import show_login from './users/helpers/show_login.js';

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