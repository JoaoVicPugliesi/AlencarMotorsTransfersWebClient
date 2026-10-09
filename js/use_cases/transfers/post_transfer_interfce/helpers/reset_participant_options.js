function reset_participant_options() {
    const participants_options = document.querySelector('.form-participants-options');
    const participants = participants_options.querySelectorAll('.participant');
    const participants_i = document.getElementById('add-transfer-participants');

    participants.forEach((p) => {
        p.classList.remove('selected');
        p.dataset.selected = 'false';
        participants_i.value = '';
    });
}

export default reset_participant_options;