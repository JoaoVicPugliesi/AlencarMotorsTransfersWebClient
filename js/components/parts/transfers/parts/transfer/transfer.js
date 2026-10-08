import transfer_info from "./parts/transfer_info.js";
import transfer_info_progress_term from "./parts/transfer_info_progress_term.js";

function transfer(params) {
    return `
    <div class="transfer ${params.status}" data-id="${params.id}">
        ${transfer_info(params)}
        ${transfer_info_progress_term(params)}
    </div>
    `
}

export default transfer;