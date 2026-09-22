function open_close_notifications () {
    const toggle = document.getElementById('header-options-notifications-toggle');
    const notifications = document.querySelector('.notifications');
    toggle.addEventListener('click', () => {
        if(notifications.classList.contains('opened')) {
            notifications.classList.remove('opened');
            return;
        }
        notifications.classList.add('opened');
    })
}

export default open_close_notifications;