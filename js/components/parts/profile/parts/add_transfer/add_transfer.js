import title from "../../../../helpers/title.js";
import add_transfer_form from "./parts/add_transfer_form.js";

function add_transfer () {
    return ` 
        <div class="add-transfer">
            ${title('main-title', 'Adicionar Transferência')}
            ${add_transfer_form()}
        </div>
    `
}

export default add_transfer;