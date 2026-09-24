import open_close_painel from '../painel/open_close_painel.js';

function view_notification_interface() {
    open_close_painel({
        trigger: '.notification',
        mode: 'transfers',
        data: {
            id: 1,
            status: 'concluded',
            name: 'Bianca',
            plate: 'QLP2668',
            vehicle: 'ONIX',
            code: 'XXXXXX',
            initial_date: '25/09/2026',
            final_date: null,
            term_date: '02/10/2026'
        }
    });
}

export default view_notification_interface;