import base_url from '../../base_url.js';

async function channel_user_notifications () {
    const user = JSON.parse(localStorage.getItem('user'));
    const params = {
        id: user.id
    }
    const query = new URLSearchParams(params).toString();
    const event = new EventSource(`${base_url}/channel_user_notifications?${query}`);

    event.addEventListener('open', () => {
        console.log('Channel is opened');
    });
    event.addEventListener('message', (e) => {
        const payload = JSON.parse(e.data);
        console.log(payload);
        if(!payload) return;
    });
    event.addEventListener('error', (error) => {
        console.log(error);
    });
}

export default channel_user_notifications;