function select_participant_option() {
    const participants_options = document.querySelector('.form-participants-options');
    const participants_i = document.getElementById('add-transfer-participants');
    participants_options.addEventListener('click', (e) => {
        const option = e.target.closest('.participant');
        if (option) {
            let participants = JSON.parse(localStorage.getItem('participants'));
            if (!option) return;
            const user_id = option.dataset.id;
            if (!user_id) return;
            if (participants.includes(user_id)) {
                option.classList.remove('selected');
                option.dataset.selected = 'false';
                participants = participants.filter((p) => { p !== user_id })
                localStorage.setItem('participants', JSON.stringify(participants));
                return;
            };
            participants.push(user_id);
            option.dataset.selected = 'true';
            option.classList.add('selected');
            localStorage.setItem('participants', JSON.stringify(participants));
            participants_i.value = '';
            participants_options.classList.remove('searched');
        }
    });
}

export default select_participant_option;