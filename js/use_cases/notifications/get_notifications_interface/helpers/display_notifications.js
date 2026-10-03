import notification from "../../../../components/parts/notifications/parts/notification.js";
import set_bell_number from "../../../../helpers/set_bell_number.js";
import play_sound_effect from '../../../../helpers/sound_effects/play_sound_effect.js'

function display_notifications(params) {
    const container = document.querySelector('#notifications-display');
    let unread_count = 0;
    if (!Array.isArray(params)) {
        container.insertAdjacentHTML(
            'afterbegin',
            notification(params)
        );
        if (!params.is_viewed) {
            unread_count = 1;
        }
        play_sound_effect(
            'notification',
            0.4
        );
    }

    if(Array.isArray(params)) {
        params.forEach((p) => {
            const params = {
                user_id: p.user_id,
                is_viewed: p.is_viewed,
                id: p.id,
                transfer_id: p.transfer_id,
                content: p.content,
                generated_by: p.generated_by,
                created_at: p.created_at
            }
            container.insertAdjacentHTML(
                'afterbegin',
                notification(params)
            );
            if (!p.is_viewed) {
                unread_count++;
            }
    
        });
    }
    
    if (unread_count > 0) {
        const bell_number = Number(
            localStorage.getItem('bell_number') || 0
        );
        localStorage.setItem(
            'bell_number',
            bell_number + unread_count
        );
        set_bell_number();
    }
}

export default display_notifications;