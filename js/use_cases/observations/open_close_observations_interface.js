import painel from '../../components/parts/painel/painel.js'

function open_observations_interface() {
    const observations = document.querySelectorAll('.observation');
    observations.forEach((o) => {
        o.addEventListener('click', () => {
            const main = document.getElementById('main');
            const observation =
            {
                id: 1,
                status: 'pending',
                title: 'Problema no CNH',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letrasets Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.',
                initial_date: '25/09/2026',
                final_date: null,
                term_date: '02/10/2026'
            }
            main.insertAdjacentHTML('beforeend', painel('observations', observation));

            close_observations_interface();
        });
    })
}

function close_observations_interface() {
    const comeback = document.getElementById('observations-comeback');
    comeback.addEventListener('click', () => {
        const main = document.getElementById('main');
        main.removeChild
    });

    if (comeback) {
        comeback.addEventListener('click', () => {
            const painel_instance = document.getElementById('observations-comeback').closest('.painel') || comeback.parentElement;

            if (painel_instance) {
                painel_instance.remove();
            }
        }, { once: true });
    }
}

function open_close_observations_interface() {
    open_observations_interface();
}

export default open_close_observations_interface;