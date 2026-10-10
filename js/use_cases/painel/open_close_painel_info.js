function open_close_painel_info() {
    document.addEventListener('click', (e) => {
        if(e.target.closest('.painel-info-toggler')) {
            const painel = e.target.closest('.painel');
            const painel_info = painel.querySelector('.painel-info');
            if (painel_info) {
                painel_info.classList.add('opened');
                painel_info.addEventListener('click', () => {
                    painel_info.classList.remove('opened');
                })
            }
        }
    })

}

export default open_close_painel_info;