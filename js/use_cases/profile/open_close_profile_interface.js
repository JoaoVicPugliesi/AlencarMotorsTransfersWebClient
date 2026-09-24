function open_close_profile_interface () {
    const toggle = document.getElementById('header-options-profile-toggle');
    const profile = document.querySelector('.profile');
    const arrow = document.querySelector('.header-options-profile-toggle-arrow-down');
    toggle.addEventListener('click', () => {
        if(profile.classList.contains('opened')) {
            profile.classList.remove('opened');
            arrow.classList.remove('opened');
            return;
        }
        profile.classList.add('opened');
        arrow.classList.add('opened');
    }); 
}

export default open_close_profile_interface;