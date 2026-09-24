function adapt_togglers () {
    const main = document.getElementById('main');
    const painels_opened = main.querySelectorAll('.painel'); 
    const profile_forms_opened = main.querySelectorAll('.form-holder'); 
    const notifications = document.querySelector('.notifications');
    const profile = document.querySelector('.profile');
    
    if(notifications.classList.contains('adapted') && profile.classList.contains('adapted')) {
        if (painels_opened.length > 0) return;   
        if (profile_forms_opened.length > 0) return;   
        notifications.classList.remove('adapted');
        profile.classList.remove('adapted');
        return;
    }
    notifications.classList.add('adapted');
    profile.classList.add('adapted');
}

export default adapt_togglers;