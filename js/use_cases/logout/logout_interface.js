import header from '../../components/parts/header/header.js'
import login from "../../components/parts/login/login.js";
import login_interface from '../login/login_interface.js';

function logout_interface() {
    const page = document.getElementById('page');
    const main = document.getElementById('main');
    const logout_confirm = document.getElementById('profile-options-logout');
    logout_confirm.addEventListener('click', () => {
        const header_i = document.getElementById('header');
        const profile_i = document.querySelector('.profile');
        const notifications_i = document.querySelector('.notifications');
        const transfers_i = document.querySelector('.transfers');
        header_i.remove();
        profile_i.remove();
        notifications_i.remove();
        transfers_i.remove();
        page.insertAdjacentHTML('afterbegin', header(false));
        main.innerHTML = '';
        main.insertAdjacentHTML('beforeend', login());
        login_interface();
    });  
}

export default logout_interface;