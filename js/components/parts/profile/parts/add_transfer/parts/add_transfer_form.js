import title from "../../../../../helpers/title.js";
import primary_input from "../../../../../helpers/inputs/primary_input.js";
import button from "../../../../../helpers/button.js";
import participant from "./participant.js";

function add_transfer_form () {
    return `
    <div class="add-transfer-form">
        <div class="add-transfer-form-participants-options">
            ${participant(1, 'André Alencar')}
        </div>
        ${primary_input('add-transfer-name', 'Nome do Cliente', 100, 'fa-solid fa-address-card')}
        ${primary_input('add-transfer-plate', 'Placa', 7, 'fa-solid fa-certificate')}
        ${primary_input('add-transfer-vehicle', 'Veículo', 50, 'fa-solid fa-car')}
        <div class="add-transfer-form-participants">
            ${title('sections-title', 'Adicione os participantes: ')}
            ${primary_input('add-transfer-participants', 'X Participantes', 1000, 'fa-solid fa-users-line')}
        </div>
        <div class="add-transfer-options">
            ${button('add-transfer-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('add-transfer-add', 'fa-solid fa-plus', 'Adicionar', 'green')}
        </div>
    </div>
    `
}

export default add_transfer_form;