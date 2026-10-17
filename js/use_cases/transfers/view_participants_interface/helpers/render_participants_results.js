import participant from "../../../../components/parts/forms/add_transfer/participant.js";

function render_participants_results({
    container,
    users,
    selected_ids,
    search
}) {
    container.innerHTML = '';

    const term = search.trim().toLowerCase();

    if (!term) {
        container.classList.remove('opened');
        return;
    }

    const results = users.filter(user => {
        const username = user.username.toLowerCase();

        return (
            username.includes(term) &&
            !selected_ids.has(user.id)
        );
    });

    if (!results.length) {
        container.classList.remove('opened');
        return;
    }

    container.classList.add('opened');

    results.forEach(user => {
        container.insertAdjacentHTML(
            'beforeend',
            participant({
                id: user.id,
                username: user.username,
                role: user.role
            })
        );
    });
}

export default render_participants_results;