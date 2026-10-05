function set_bell_number () {
    const main_header_bell_i = document.querySelector('.header-options-notifications-toggle-i');
    console.log(main_header_bell_i);
    const bell_number_h3 = document.querySelector('#header-options-notifications-toggle-number h3');
    console.log(bell_number_h3);
    bell_number_h3.textContent = Number(localStorage.getItem('bell_number'));
    if(bell_number_h3.textContent > 0) {
        main_header_bell_i.classList.add('ring');
        return;
    }
    main_header_bell_i.classList.remove('ring');
}

export default set_bell_number;