import painel from '../../components/parts/painel/painel.js'

function open_transfers () {
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
            main.insertAdjacentHTML('afterend', painel('transfers', transfer));

            close_transfers();
        });
    })
}

function close_transfers () {
    const comeback = document.getElementById('transfers-comeback');
    comeback.addEventListener('click', () => {
        const main = document.getElementById('main');
        main.removeChild
    });

    if (comeback) {
    comeback.addEventListener('click', () => {
      const panel_instance = document.getElementById('transfers-comeback').closest('#painel') || comeback.parentElement; 
      
      if (panel_instance) {
        panel_instance.remove(); 
      }
    }, { once: true });
  }
}

function open_close_transfers () {
    open_transfers();
}

export default open_close_transfers;