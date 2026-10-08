import delayed_notification from '../../../server/use_cases/notifications/delayed_notification.js';
import show_message from '../../../helpers/messages/show_message.js';
import get_observation from '../../../server/use_cases/observations/get_observation.js';
import get_transfer from '../../../server/use_cases/transfers/get_transfer.js';
import get_transfer_users from '../../../server/use_cases/transfers/get_transfer_users.js';
import post_notifications_interface from '../post_notifications_interface/post_notifications_interface.js';
import post_user_notifications_interface from '../post_user_notifications_interface/post_user_notifications_interface.js';
import set_timestamp from '../../../helpers/timestamp/set_timestamp.js';

async function delayed_notification_interface(params) {
    const user = JSON.parse(localStorage.getItem('user'));
    const { status: d_status, json: d_json } = await delayed_notification(params);
    const { message: d_message } = d_json;
    if (d_status !== 200) {
        show_message(
            'error',
            `${d_message}`
        );
        return;
    }
    let transfer_id = null;
    if (params.mode === 'observations') {
        const observation = await get_observation({
            id: params.id
        });
        const { status: g_status, json: g_json } = observation;
        const { message: g_message, observation: g_observation } = g_json;
        if (g_status !== 200) {
            show_message(
                'error',
                `${g_message}`
            );
            return;
        }
        transfer_id = g_observation.transfer_id;
    }

    const { status: tr_status, json: tr_json } = await get_transfer({
        id: transfer_id ?? params.id
    });
    const { message: tr_message, transfer: tr_transfer } = tr_json
    if (tr_status !== 200) {
        show_message(
            'error',
            `${tr_message}`
        );
        return;
    }
    const { status: tru_status, json: tru_json } = await get_transfer_users({
        id: tr_transfer.id
    });
    const { message: tru_message, transfer_users: tru_transfer_users } = tru_json;
    if (tru_status !== 200) {
        show_message(
            'error',
            `${tru_message}`
        );
        return;
    }
    const now = new Date();
    const notification = await post_notifications_interface({
        transfer_id: tr_transfer.id,
        content: `Transferência ${tr_transfer.code} atrasada`,
        generated_by: user.id,
        created_at: set_timestamp(now)
    });
    await Promise.all(
        tru_transfer_users.map((p) =>
            post_user_notifications_interface({
                user_id: p.user_id,
                notification_id: notification.id,
                notified_at: notification.created_at
            })
        )
    );
}

export default delayed_notification_interface;