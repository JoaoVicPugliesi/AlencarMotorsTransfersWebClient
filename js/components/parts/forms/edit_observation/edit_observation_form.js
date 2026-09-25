import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";
import text_area from "../../../helpers/inputs/text_area.js";

function edit_observation_form () {
    const content = `
        ${primary_input('add-observation-name', 'Nome da Observação', 25, 'fa-solid fa-signature')}
        ${text_area('add-observation-description', 'Descrição', 1000)}
        <div class="form-options">
            ${button('edit-observation-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('edit-observation-save', 'fa-solid fa-pen-to-square', 'Editar', 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default edit_observation_form;