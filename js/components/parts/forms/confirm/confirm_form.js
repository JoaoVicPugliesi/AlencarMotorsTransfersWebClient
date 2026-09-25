import button from "../../../helpers/button.js";
import form from "../../../helpers/form.js";
import primary_input from "../../../helpers/inputs/primary_input.js";

function confirm_form () {
    const content = `
        ${primary_input(`confirm-password`, 'Senha', 25, 'fa-solid fa-signature')}
        <div class="form-options">
            ${button(`confirm-comeback`, 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
            ${button(`confirm-command`, 'fa-solid fa-check-double', `Confirmar`, 'green')}
        </div>
    `
    return `
        ${form(content)}
    `
}

export default confirm_form;