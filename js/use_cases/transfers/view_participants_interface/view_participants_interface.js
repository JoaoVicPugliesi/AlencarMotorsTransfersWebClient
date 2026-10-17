import painel from "../../../components/parts/painel/painel.js";
import show_message from "../../../helpers/messages/show_message.js";
import set_timestamp from "../../../helpers/timestamp/set_timestamp.js";
import post_transfer_users from "../../../server/use_cases/transfers/post_transfer_users.js";
import post_notifications_interface from "../../notifications/post_notifications_interface/post_notifications_interface.js";
import post_user_notifications_interface from "../../notifications/post_user_notifications_interface/post_user_notifications_interface.js";
import render_participants from "./helpers/render_participants.js";
import render_participants_results from "./helpers/render_participants_results.js";
import select_participant from "./helpers/select_participant.js";

async function view_participants_interface(command_i) {
    const main = document.querySelector('#main');
    const painel_i = command_i.closest('.painel');
    const form_i = main.lastElementChild;
    if (!painel_i || !form_i) {
        show_message('error', 'Erro');
        return;
    }
    const ids_i = JSON.parse(painel_i.dataset.ids);
    const params_i = JSON.parse(painel_i.dataset.params);
    const user = JSON.parse(localStorage.getItem('user'));
    const users = JSON.parse(
        localStorage.getItem('users')
    ).filter((u) => u.id.toUpperCase().trim() !== user.id.toUpperCase().trim());
    let selected_ids = await render_participants({
        form_i,
        id: ids_i.id,
        users
    });
    let previous_ids = [...selected_ids];
    const input = form_i.querySelector('#view-participants-i-participants');
    const results_container = form_i.querySelector('.participant-results');
    input.addEventListener('input', () => {
        render_participants_results({
            container: results_container,
            users,
            selected_ids,
            search: input.value
        });
    });
    select_participant({
        form_i,
        container: results_container,
        users,
        selected_ids,
        input
    });
    const command = form_i.querySelector('#view-participants-save');

    command.addEventListener('click', async () => {
        const loading_message = show_message(
            'loading',
            'Adicionando Participantes'
        );
        const new_user_ids = [...selected_ids]
            .filter(id => !previous_ids.includes(id));
        if (new_user_ids.length === 0) {
            show_message(
                'error',
                'Você precisa selecionar pelo menos um novo participante'
            );
            loading_message.remove();
            return;
        }
        await Promise.all(
            new_user_ids.map(user_id =>
                post_transfer_users({
                    user_id,
                    transfer_id: ids_i.id
                })
            )
        );
        const now = new Date();
        const notification = await post_notifications_interface({
            transfer_id: ids_i.id,
            content: `${user.username} adicionou você na transferência ${params_i.code}`,
            generated_by: user.id,
            created_at: set_timestamp(now)
        });
        new_user_ids.forEach(async (p) => {
            await post_user_notifications_interface({
                user_id: p,
                notification_id: notification.id,
                notified_at: notification.created_at
            });
        });
        const trigger = painel_i._trigger;
        form_i.remove();
        painel_i.remove();
        main.insertAdjacentHTML(
            'beforeend',
            painel('transfers', params_i)
        );
        const new_painel = main.lastElementChild;
        new_painel._trigger = trigger;
        loading_message.remove();
        show_message(
            'success',
            'Participantes adicionados'
        );
    });
}

export default view_participants_interface;