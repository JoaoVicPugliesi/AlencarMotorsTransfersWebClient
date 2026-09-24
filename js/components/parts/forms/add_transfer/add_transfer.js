import title from "../../../helpers/title.js";
import add_transfer_form from "./add_transfer_form.js";

function add_transfer () {
    return ` 
        <div class="form-holder">
            ${title('main-title', 'Adicionar Transferência')}
            ${add_transfer_form()}
        </div>
    `
}

export default add_transfer;