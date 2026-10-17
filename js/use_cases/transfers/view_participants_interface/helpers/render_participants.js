import participant from "../../../../components/parts/forms/add_transfer/participant.js";
import show_message from "../../../../helpers/messages/show_message.js";
import get_transfer_users from "../../../../server/use_cases/transfers/get_transfer_users.js";

async function render_participants({ form_i, id, users }) {
    const loading_message = show_message(
        'loading',
        'Carregando...'
    );

    const { status, json } = await get_transfer_users({
        id
    });

    if (status !== 200) {
        show_message(
            'error',
            'Erro ao atualizar os participantes'
        );
        loading_message.remove();
        return new Set();
    }

    const { transfer_users } = json;
    const user_ids = new Set(
        transfer_users.map(tr => tr.user_id)
    );
    const participants_container =
        form_i.querySelector('.participants');
    participants_container.innerHTML = '';
    const participants = users.filter(
        user => user_ids.has(user.id)
    );
    participants.forEach(user => {
        participants_container.insertAdjacentHTML(
            'beforeend',
            participant({
                id: user.id,
                username: user.username,
                role: user.role
            })
        );
        const participant_i = participants_container.lastElementChild;
        participant_i.classList.add('selected');
    });
    loading_message.remove();
    return user_ids;
}

export default render_participants;