import painel from '../../components/parts/painel/painel.js'
import adapt_togglers from '../../helpers/adapt_togglers.js';
import open_close_observations_interface from '../observations/open_close_observations_interface.js';

function open_transfers_interface () {
    const transfers = document.querySelectorAll('.transfer');
    transfers.forEach((t) => {
        t.addEventListener('click', () => {
            const main = document.getElementById('main');
            const transfer =
            {
                id: 1,
                status: 'pending',
                name: 'João Victor Lima Almeida Pugliesi',
                plate: 'QLP2668',
                vehicle: 'ONIX',
                code: 'XXXXXX',
                initial_date: '25/09/2026',
                final_date: null,
                term_date: '02/10/2026'
            }
            main.insertAdjacentHTML('beforeend', painel('transfers', transfer));

            adapt_togglers();
            close_transfers_interface();
            open_close_observations_interface();
        });
    })
}

function close_transfers_interface () {
    const comeback = document.getElementById('transfers-comeback');
    comeback.addEventListener('click', () => {
        const main = document.getElementById('main');
        main.removeChild
    });

    if (comeback) {
    comeback.addEventListener('click', () => {
      const painel_instance = document.getElementById('transfers-comeback').closest('.painel') || comeback.parentElement; 
      
      if (painel_instance) {
        painel_instance.remove(); 
        adapt_togglers()
      }
    }, { once: true });
  }
}

function open_close_transfers_interface () {
    open_transfers_interface();
}

export default open_close_transfers_interface;