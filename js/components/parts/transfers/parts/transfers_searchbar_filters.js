import secondary_input from "../../../helpers/inputs/secondary_input.js";
import select_input from "../../../helpers/inputs/select_input.js";

function transfers_searchbar_filters() {
    return `
    <div class="transfers-searchbar-filters">
        ${secondary_input('transfers-searchbar-filters-plate', 'Placa')}
        ${secondary_input('transfers-searchbar-filters-vehicle', 'Veículo')}
        ${secondary_input('transfers-searchbar-filters-code', 'Código')}
        ${select_input('transfers-searchbar-filters-code-status',
        [
        { value: 'pending', label: 'Pendente' },
        { value: 'concluded', label: 'Concluída' },
        { value: 'delayed', label: 'Atrasada' }
        ]
    )}
    </div>
    `
}

export default transfers_searchbar_filters;