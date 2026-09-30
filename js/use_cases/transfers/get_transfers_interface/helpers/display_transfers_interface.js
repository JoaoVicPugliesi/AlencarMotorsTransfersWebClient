import transfer from '../../../../components/parts/transfers/parts/transfer/transfer.js';
import countdown from '../../../../helpers/countdown.js';

function display_transfers_interface (transfers) {
    const transfers_display = document.querySelector('.transfers-display');
    transfers_display.innerHTML = '';
    if(transfers.length === 0) {
        transfers_display.insertAdjacentHTML('beforeend', '<h3>Sem Transferências</h3>')
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

export default display_transfers_interface;