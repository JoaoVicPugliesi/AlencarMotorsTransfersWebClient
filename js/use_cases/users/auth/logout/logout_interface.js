function logout_interface() {
    const logout_confirm = document.getElementById('profile-options-logout');
    if (!logout_confirm) return;
    logout_confirm.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.dispatchEvent(new CustomEvent('user-logout'));
    });

}

export default logout_interface;