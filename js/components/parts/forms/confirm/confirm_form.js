import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";

function confirm_form (id, action, action_i) {
    const content = `
        ${primary_input(`${id}-password`, 'Senha', 25, 'fa-solid fa-signature')}
        <div class="form-options">
            ${button(`${id}-comeback`, 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button(`${id}-confirm`, `${action_i}`, `${action}`, 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default confirm_form;