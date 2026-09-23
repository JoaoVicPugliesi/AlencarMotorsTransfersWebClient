import secondary_input from "../../../helpers/inputs/secondary_input.js";

function transfers_searchbar_filters() {
    return `
    <div class="transfers-searchbar-filters">
        ${secondary_input('transfers-searchbar-filters-plate', 'Placa')}
        ${secondary_input('transfers-searchbar-filters-vehicle', 'Veículo')}
        ${secondary_input('transfers-searchbar-filters-code', 'Código')}
        ${secondary_input('transfers-searchbar-filters-status', 'Status')}
    </div>
    `
}

export default transfers_searchbar_filters;