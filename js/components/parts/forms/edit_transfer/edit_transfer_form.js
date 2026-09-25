import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";

function edit_transfer_form () {
    const content = `
        ${primary_input('edit-transfer-name', 'Nome do Cliente', 100, 'fa-solid fa-address-card')}
        ${primary_input('edit-transfer-plate', 'Placa', 7, 'fa-solid fa-certificate')}
        ${primary_input('edit-transfer-vehicle', 'Veículo', 50, 'fa-solid fa-car')}
        <div class="form-options">
            ${button('edit-transfer-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('edit-transfer-save', 'fa-solid fa-pen-to-square', 'Editar', 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default edit_transfer_form;