import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";

function add_observation_form () {
    const content = `
        ${primary_input('add-observation-name', 'Nome da Observação', 25, 'fa-solid fa-signature')}
        ${primary_input('add-observation-description', 'Descrição', 1000, 'fa-solid fa-align-justify')}
        <div class="form-options">
            ${button('add-observation-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('add-observation-add', 'fa-solid fa-plus', 'Adicionar', 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default add_observation_form;