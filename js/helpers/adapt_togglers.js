function adapt_togglers () {
    const notifications = document.querySelector('.notifications');
    const profile = document.querySelector('.profile');

    if(notifications.classList.contains('adapted') && profile.classList.contains('adapted')) {
        notifications.classList.remove('adapted');
        profile.classList.remove('adapted');
        return;
    }
    notifications.classList.add('adapted');
    profile.classList.add('adapted');
}

export default adapt_togglers;