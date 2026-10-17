import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";

function view_participants_form () {
    const content = `
        ${primary_input('view-participants-i-participants', 'text', 'X Participantes', 1000, 'fa-solid fa-users-line')}
        <div class="form-options">
            ${button('view-participants-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button('view-participants-save', 'fa-solid fa-plus', 'Adicionar', 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default view_participants_form;