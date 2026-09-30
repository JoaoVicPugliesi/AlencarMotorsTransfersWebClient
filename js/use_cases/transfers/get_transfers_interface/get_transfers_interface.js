import transfer from "../../../components/parts/transfers/parts/transfer/transfer.js";
import countdown from "../../../helpers/countdown.js";
import get_transfers from "../../../server/use_cases/transfers/get_transfers.js";

async function get_transfers_interface() {
    const transfers_display = document.querySelector('.transfers-display');
    transfers_display.innerHTML = '';
    const user = JSON.parse(localStorage.getItem('user'));
    const transfers_i = await get_transfers({ id: user.id });
    const { status, json } = transfers_i;
    const { transfers } = json;
    if (status === 200) { localStorage.setItem('transfers', JSON.stringify(transfers)) };
    if (!transfers) {
        window.alert('Nenhuma transferência associada')
        return;
    }
    transfers.forEach((t) => {
        transfers_display
            .insertAdjacentHTML('beforeend', transfer({
                id: t.id,
                status: t.status,
                name: t.name,
                plate: t.plate,
                vehicle: t.vehicle,
                code: t.code,
                initial_date: t.initial_date,
                final_date: t.final_date,
                term_date: t.term_date
            }));
    });
    countdown();
}

export default get_transfers_interface;