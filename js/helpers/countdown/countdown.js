import get_difference from "./helpers/get_difference.js";

function update() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach((countdown) => {
        const {
            initial_date,
            final_date,
            term_date,
            status
        } = JSON.parse(countdown.dataset.params);

        const display = countdown.querySelector('h3');
        if (status === 'concluded') {
            const i_date = new Date(initial_date).getTime();
            const f_date = new Date(final_date).getTime();
            const difference = f_date - i_date;
            const seconds = Math.floor(difference / 1000) % 60;
            const minutes = Math.floor(difference / (1000 * 60)) % 60;
            const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            display.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
            return;
        }

        const is_diff = get_difference(term_date);
        if(!is_diff) return;
        const seconds = Math.floor(is_diff / 1000) % 60;
        const minutes = Math.floor(is_diff / (1000 * 60)) % 60;
        const hours = Math.floor(is_diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(is_diff / (1000 * 60 * 60 * 24));
        display.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    });
}

function countdown() {
    update();
    return setInterval(update, 1000);
}

export default countdown;