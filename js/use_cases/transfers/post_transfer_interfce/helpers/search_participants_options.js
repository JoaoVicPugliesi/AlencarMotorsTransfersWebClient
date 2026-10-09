import render_participants_options from "./render_participants_options.js";

function search_participants_options() {
    const user = JSON.parse(localStorage.getItem('user'));
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const no_i_users = users.filter((u) => u.username !== user.username);
    const participants_options = document.querySelector('.form-participants-options');
    const participants_i = document.getElementById('add-transfer-participants');
    participants_i.addEventListener('input', () => {
        const value = participants_i.value.trim().toLowerCase();
        if (value) {
            participants_options.classList.add('searched');
            const filtered_users = no_i_users.filter((u) => {
                return u.username.toLowerCase().startsWith(value);
            });
            render_participants_options(filtered_users);
            return;
        }
        participants_options.classList.remove('searched');
    });
}

export default search_participants_options;