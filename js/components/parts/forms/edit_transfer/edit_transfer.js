import title from "../../../helpers/title.js";
import edit_transfer_form from "./edit_transfer_form.js";

function edit_tranfer () {
    return `
    <div class="form-holder">
        ${title('main-title', 'Editar Transferência')}
        ${edit_transfer_form()}
    </div>
    `
}

export default edit_tranfer;