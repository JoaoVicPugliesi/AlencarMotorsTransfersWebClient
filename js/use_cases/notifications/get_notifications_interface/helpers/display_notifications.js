import notification from "../../../../components/parts/notifications/parts/notification.js";
import set_bell_number from "../../../../helpers/set_bell_number.js";
import play_sound_effect from '../../../../helpers/sound_effects/play_sound_effect.js';
import delete_user_notification_interface from "../../delete_user_notification/delete_user_notification_interface.js";

function display_notifications(params) {
    const container = document.querySelector('#notifications-display');

    if (!container) return;
    if (Array.isArray(params)) {
        container.innerHTML = '';

        let unread_count = 0;
        const reversed_params = params.reverse();
        reversed_params.forEach((p) => {
            const notification_params = {
                user_id: p.user_id,
                is_viewed: p.is_viewed,
                id: p.id,
                transfer_id: p.transfer_id,
                content: p.content,
                generated_by: p.generated_by,
                created_at: p.created_at
            };

            container.insertAdjacentHTML(
                'beforeend',
                notification(notification_params)
            );

            if (!p.is_viewed) {
                unread_count++;
            }
        });
        localStorage.setItem(
            'bell_number',
            unread_count
        );
    }
    else {
        container.insertAdjacentHTML(
            'afterbegin',
            notification(params)
        );

        if (!params.is_viewed) {
            const current_bell = Number(
                localStorage.getItem('bell_number') || 0
            );

            localStorage.setItem(
                'bell_number',
                current_bell + 1
            );
        }

        play_sound_effect(
            'notification',
            0.4
        );
    }

    set_bell_number();

    delete_user_notification_interface();
}

export default display_notifications;