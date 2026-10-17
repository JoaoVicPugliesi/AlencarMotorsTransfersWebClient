import participant from "../../../../components/parts/forms/add_transfer/participant.js";
import render_participants_results from "./render_participants_results.js";

function select_participant({ form_i, container, users, selected_ids, input }) {
    container.addEventListener('click', (e) => {
        container.classList.remove('opened');
        const participant_i = e.target.closest('.participant');
        if (!participant_i) return;
        const user_id = participant_i.dataset.id;
        selected_ids.add(user_id);
        render_participants_results({
            container: container,
            users,
            selected_ids,
            search: input.value
        });
        const user = users.find(
            user => user.id === user_id
        );
        const participants_container = form_i.querySelector('.participants');
        participants_container.insertAdjacentHTML(
            'beforeend',
            participant({
                id: user.id,
                username: user.username,
                role: user.role
            })
        );
        participants_container
            .lastElementChild
            .classList.add('selected');
    });
}

export default select_participant;