import open_close_painel from "../painel/open_close_painel.js";

function view_observation_interface() {
    open_close_painel({
        trigger: '.observation',
        mode: 'observations',
        data: {
            id: 1,
            status: 'pending',
            title: 'Problema no CNH',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since 1966.',
            initial_date: '25/09/2026',
            final_date: null,
            term_date: '02/10/2026'
        },
    });
}

export default view_observation_interface;