import delayed_notification_interface from "../../use_cases/notifications/delayed_notification_interface/delayed_notification_interface.js";
import get_difference from "./helpers/get_difference.js";
import get_transfers_interface from "../../use_cases/transfers/get_transfers_interface/get_transfers_interface.js";

let countdown_interval = null;
const delaying = new Set();
async function update() {
    const countdowns = document.querySelectorAll('.countdown');
    countdowns.forEach(async (countdown) => {
        const {
            id,
            mode,
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

            display.textContent =
                `${days}D ${hours}H ${minutes}M ${seconds}S`;

            return;
        }

        const is_diff = get_difference(term_date);
        if (!is_diff) {
            if (status !== 'delayed' && !delaying.has(id)) {
                delaying.add(id);

                try {
                    await delayed_notification_interface({
                        id,
                        mode
                    });
                    await get_transfers_interface();
                } finally {
                    delaying.delete(id);
                }
            }

            return;
        }

        const seconds = Math.floor(is_diff / 1000) % 60;
        const minutes = Math.floor(is_diff / (1000 * 60)) % 60;
        const hours = Math.floor(is_diff / (1000 * 60 * 60)) % 24;
        const days = Math.floor(is_diff / (1000 * 60 * 60 * 24));

        display.textContent =
            `${days}D ${hours}H ${minutes}M ${seconds}S`;
    });
}

function countdown() {
    if (countdown_interval) {
        return;
    }
    update();
    countdown_interval = setInterval(update, 1000);
    return countdown_interval;
}

export default countdown;