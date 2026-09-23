import transfer_info from "./parts/transfer_info.js";
import transfer_info_progress_term from "./parts/transfer_info_progress_term.js";

function transfer(params) {
    const { id, status, name, plate, vehicle, code, initial_date, final_date, term_date } = params;
    return `
    <div class="transfer ${status}" data-id="${id}">
        ${transfer_info(name, plate, vehicle, code)}
        ${transfer_info_progress_term(initial_date, final_date, term_date)}
    </div>
    `
}

export default transfer;