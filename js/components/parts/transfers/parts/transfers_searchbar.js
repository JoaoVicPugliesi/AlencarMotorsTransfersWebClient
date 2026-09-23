import primary_input from '../../../helpers/inputs/primary_input.js';
import button from '../../../helpers/button.js';
import transfers_searchbar_filters from "./transfers_searchbar_filters.js";

function transfers_searchbar () {
    return `
    <div class="transfers-searchbar">
        ${primary_input('main-searchbar-name', 'Nome do cliente', 100, 'fa-solid fa-magnifying-glass')}
        ${transfers_searchbar_filters()}
        ${button('transfers-searchbar-command', 'fa-solid fa-magnifying-glass', 'Pesquise', 'blue')}
    </div>
    `
}

export default transfers_searchbar;