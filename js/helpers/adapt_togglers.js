function adapt_togglers () {
    const notifications = document.querySelector('.notifications');
    const profile = document.querySelector('.profile');
    const main = document.getElementById('main');
    const painels_opened = main.querySelectorAll('.painel');
    
    if(notifications.classList.contains('adapted') && profile.classList.contains('adapted')) {
        if (painels_opened.length > 0) return;   
        notifications.classList.remove('adapted');
        profile.classList.remove('adapted');
        return;
    }
    notifications.classList.add('adapted');
    profile.classList.add('adapted');
}

export default adapt_togglers;