function update() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach((countdown) => {
        const term_date = countdown.dataset.termdate;
        const term = new Date(term_date).getTime();
        const now = Date.now();
        const difference = term - now;
        const display = countdown.querySelector('h3');
        if (difference <= 0) {
            display.textContent = 'ATRASADO';
            return;
        }
        const seconds = Math.floor(difference / 1000) % 60;
        const minutes = Math.floor(difference / (1000 * 60)) % 60;
        const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
        const days = Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );

        display.textContent = `${days}D ${hours}H ${minutes}M ${seconds}S`;
    });
}

function countdown() {
    update();
    return setInterval(update, 1000);
}

export default countdown;