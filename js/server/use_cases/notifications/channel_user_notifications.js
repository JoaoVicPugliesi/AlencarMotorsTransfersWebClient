import show_message from '../../../helpers/messages/show_message.js';
import display_notifications from '../../../use_cases/notifications/get_notifications_interface/helpers/display_notifications.js';
import get_transfers_interface from '../../../use_cases/transfers/get_transfers_interface/get_transfers_interface.js';
import { get_current_user } from '../../../use_cases/users/helpers/get_current_user.js';
import base_url from '../../base_url.js';
import get_notifications from './get_notifications.js';

let event = null;

function channel_user_notifications() {
    close_user_notifications_channel();
    const user = get_current_user();
    if (!user) {
        show_message('error', 'Nenhum usuário')
        return;
    }
    const params = { id: user.id };
    const query = new URLSearchParams(params).toString();
    event = new EventSource(`${base_url}/channel_user_notifications?${query}`);
    event.addEventListener('open', () => {});
    event.addEventListener('message', async (e) => {
        const payload = JSON.parse(e.data);
        if (!payload) return;
        const current_user = get_current_user();
        if (!current_user || current_user.id !== user.id) {
            event?.close();
            event = null;
            return;
        }
        const response = await get_notifications({
            user_id: payload.new.user_id,
            notification_id: payload.new.notification_id,
            unique: true
        });
        if (response.status !== 200) return;
        display_notifications({
            user_id: payload.new.user_id,
            is_viewed: payload.new.is_viewed,
            ...response.json.notifications,
        });
        await get_transfers_interface();
    });
    event.addEventListener('error', (error) => {});
}

function close_user_notifications_channel() {
    if (event) {
        event.close();
        event = null;
    };
}

window.addEventListener('pagehide', () => {
    close_user_notifications_channel();
});

window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    const user = get_current_user();
    if (!user) return;
    channel_user_notifications();
});

export { channel_user_notifications, close_user_notifications_channel };
