import display_transfers_interface from "./get_transfers_interface/helpers/display_transfers_interface.js";
import countdown from '../../helpers/countdown.js';

function search_transfers_interface () {
    const command = document.getElementById('transfers-searchbar-command');
    command.addEventListener('click', (e) => {
        const name_i = document.getElementById('main-searchbar-name');
        const plate_i = document.getElementById('transfers-searchbar-filters-plate');
        const vehicle_i = document.getElementById('transfers-searchbar-filters-vehicle');
        const code_i = document.getElementById('transfers-searchbar-filters-code');
        const status_i = document.getElementById('transfers-searchbar-filters-code-status');
        let transfers = JSON.parse(localStorage.getItem('transfers'));
        if(name_i.value) transfers = transfers.filter((t) => t.name.toUpperCase().startsWith(name_i.value.toUpperCase()));
        if(plate_i.value) transfers = transfers.filter((t) => t.plate.toUpperCase().startsWith(plate_i.value.toUpperCase()));
        if(vehicle_i.value) transfers = transfers.filter((t) => t.vehicle.toUpperCase().startsWith(vehicle_i.value.toUpperCase()));
        if(code_i.value) transfers = transfers.filter((t) => t.code.toUpperCase().startsWith(code_i.value.toUpperCase()));
        if(status_i.value) transfers = transfers.filter((t) => t.status.toUpperCase().startsWith(status_i.value.toUpperCase()));
        display_transfers_interface(transfers);
        countdown();
    });
}

export default search_transfers_interface;