import transfer from "../../../components/parts/transfers/parts/transfer/transfer.js";

async function get_transfers_interface() {
    const transfers_display = document.querySelector('.transfers-display');
    const transfers = JSON.parse(localStorage.getItem('transfers'));
    transfers_display.innerHTML = '';
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
}

export default get_transfers_interface;