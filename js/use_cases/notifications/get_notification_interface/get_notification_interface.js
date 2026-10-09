import open_close_painel from '../../painel/open_close_painel.js';
import get_notification_d from './helpers/get_notification_d.js';

function get_notification_interface() {
    open_close_painel({
        trigger: '.notification-options-view',
        mode: 'transfers',
        get_data: async (el) => {
            return await get_notification_d(el);
        }
    });
}

export default get_notification_interface;