function toggle_primary_input_eye() {
    const eyes = document.querySelectorAll('.primary-input-holder-eye');
    eyes.forEach((eye) => {
        eye.addEventListener('click', (e) => {
            const primary_input_holder = e.target.closest('.primary-input-holder');
            const primary_input = primary_input_holder.querySelector('.primary-input');
            if (primary_input.type === "password") {
                primary_input.type = 'text';
                eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>'
                return;
            }
            primary_input.type = 'password';
            eye.innerHTML = '<i class="fa-solid fa-eye"></i>'
        });
    });
}

export default toggle_primary_input_eye;