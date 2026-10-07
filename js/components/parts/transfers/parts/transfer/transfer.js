import get_difference from "../../../../../helpers/countdown/helpers/get_difference.js";
import transfer_info from "./parts/transfer_info.js";
import transfer_info_progress_term from "./parts/transfer_info_progress_term.js";

function transfer(params) {
    let { id, status, name, plate, vehicle, code, initial_date, final_date, term_date } = params;
    const is_diff = get_difference(term_date);
    if(!is_diff) {
        status = 'delayed';
    }
    return `
    <div class="transfer ${status}" data-id="${id}">
        ${transfer_info(name, plate, vehicle, code)}
        ${transfer_info_progress_term(initial_date, final_date, term_date, status)}
    </div>
    `
}

export default transfer;