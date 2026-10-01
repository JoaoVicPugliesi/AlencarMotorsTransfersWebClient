import transfer from '../../../../components/parts/transfers/parts/transfer/transfer.js';

function display_transfers_interface (transfers) {
    const reversed_transfers = transfers.reverse();
    const transfers_display = document.querySelector('.transfers-display');
    transfers_display.innerHTML = '';
    if(reversed_transfers.length === 0) {
        transfers_display.insertAdjacentHTML('beforeend', '<h3>Sem Transferências</h3>')
    }
    for(let i = 0; i < reversed_transfers.length; i++) {
        if(i === 15) return;
        const transfer_i = reversed_transfers[i];
        transfers_display
            .insertAdjacentHTML('beforeend', transfer({
                id: transfer_i.id,
                status: transfer_i.status,
                name: transfer_i.name,
                plate: transfer_i.plate,
                vehicle: transfer_i.vehicle,
                code: transfer_i.code,
                initial_date: transfer_i.initial_date,
                final_date: transfer_i.final_date,
                term_date: transfer_i.term_date
        }));
    }
}

export default display_transfers_interface;