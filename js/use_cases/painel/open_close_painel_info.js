function open_close_painel_info() {
    document.addEventListener('click', (e) => {
        const toggler = e.target.closest('.painel-info-toggler');
        if (toggler) {
            const painel = toggler.closest('.painel');
            if (!painel) return;
            const painel_info = painel.querySelector('.painel-info');
            if (!painel_info) return;
            painel_info.classList.toggle('opened');
            return;
        }
        const painel_info = e.target.closest('.painel-info');
        if (painel_info) {
            painel_info.classList.remove('opened');
        }
    });
}

export default open_close_painel_info;