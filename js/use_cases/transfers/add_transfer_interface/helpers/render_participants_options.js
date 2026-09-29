import participant from "../../../../components/parts/forms/add_transfer/participant.js";

function render_participants_options(users_to_render) {
    const container = document.querySelector('.form-participants-options');
    const current_options = container.querySelectorAll('.participant');
    current_options.forEach((option) => { if (option.dataset.selected !== 'true') option.remove(); });
    users_to_render.forEach((u) => {
        const already_exists = container.querySelector(`[data-id="${u.id}"]`);
        if (already_exists) return;
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