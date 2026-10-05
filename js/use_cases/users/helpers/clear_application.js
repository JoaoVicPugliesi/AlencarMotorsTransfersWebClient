function clear_application() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    document.getElementById('header')?.remove();
    document.getElementById('login')?.remove();
    document.querySelector('.profile')?.remove();
    document.querySelector('.notifications')?.remove();
    document.querySelector('.transfers')?.remove();
}

export default clear_application;