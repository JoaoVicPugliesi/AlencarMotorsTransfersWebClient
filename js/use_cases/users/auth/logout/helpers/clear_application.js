import { clear_current_user } from "../../../helpers/get_current_user.js";

function clear_application() {
    document.getElementById('header')?.remove();
    document.getElementById('login')?.remove();
    document.querySelector('.profile')?.remove();
    document.querySelector('.notifications')?.remove();
    document.querySelector('.transfers')?.remove();

    clear_current_user();
    localStorage.removeItem('users');
    localStorage.removeItem('participants');
    localStorage.removeItem('bell_number');
    localStorage.removeItem('transfers');
}

export default clear_application;