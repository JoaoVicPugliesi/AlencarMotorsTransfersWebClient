function open_close_painel_info () {
    const painel_info_toggler = document.querySelectorAll('.painel-info-toggler');
    painel_info_toggler.forEach((p) => {
        p.addEventListener('click', (e) => {
            const painel = e.target.closest('.painel');
            const painel_info = painel.querySelector('.painel-info');
            if(painel_info) {
                painel_info.classList.add('opened');
                painel_info.addEventListener('click', () => {
                    painel_info.classList.remove('opened');
                })
            }
        })
    });
}

export default open_close_painel_info;