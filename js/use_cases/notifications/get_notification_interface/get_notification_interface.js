import show_message from '../../../helpers/messages/show_message.js';
import open_close_painel from '../../painel/open_close_painel.js';
import get_notification_d from './helpers/get_notification_d.js';

function get_notification_interface() {
    open_close_painel({
        trigger: '.notification-options-view',
        mode: 'transfers',
        get_data: async (el) => {
            const loading_message = show_message(
                'loading',
                'Carregando...'
            );
            const d = await get_notification_d(el);
            loading_message.remove();
            return d
        }
    });
}

export default get_notification_interface;