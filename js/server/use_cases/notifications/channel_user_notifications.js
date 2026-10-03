import display_notifications from '../../../use_cases/notifications/get_notifications_interface/helpers/display_notifications.js';
import base_url from '../../base_URL.js';
import get_notifications from './get_notifications.js';

function channel_user_notifications() {
    const user = JSON.parse(localStorage.getItem('user'));
    const params = {
        id: user.id
    }
    console.log(user);
    const query = new URLSearchParams(params).toString();
    const event = new EventSource(`${base_url}/channel_user_notifications?${query}`);

    event.addEventListener('open', () => {
        console.log('Channel is opened');
    });
    event.addEventListener('message', async (e) => {
        console.log(e);
        const payload = JSON.parse(e.data);
        console.log(payload);
        if (!payload) return;
        const response = await get_notifications({
            user_id: payload.new.user_id,
            notification_id: payload.new.notification_id,
            unique: true
        });
        console.log(response);
        if (response.status !== 200) return;
        display_notifications({
            user_id: payload.new.user_id,
            is_viewed: payload.new.is_viewed,
            ...response.json.notifications,
        });

    });
    event.addEventListener('error', (error) => {
        console.log(error);
    });
}

export default channel_user_notifications;