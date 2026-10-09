import participant from "../../../../components/parts/forms/add_transfer/participant.js";

function render_participants_options(users_to_render) {
    const container = document.querySelector('.form-participants-options');
    const participants = container.querySelectorAll('.participant');
    participants.forEach(
        (o) => { if (o.dataset.selected !== 'true') o.remove(); 
    });
    users_to_render.forEach((u) => {
        const is_already = container.querySelector(`[data-id="${u.id}"]`);
        if (is_already) return;
        container.insertAdjacentHTML(
            'beforeend',
            participant({
                id: u.id,
                username: u.username,
                role: u.role
            })
        );
    });
}

export default render_participants_options;