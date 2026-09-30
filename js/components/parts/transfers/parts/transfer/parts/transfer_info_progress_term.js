import date_format_timestamp from "../../../../../../helpers/date_format_timestamp.js";
import info_i from "../../../../../helpers/info_i.js";

function transfer_info_progress_term (initial_date, final_date, term_date) {
    return `
    <div class="transfer-info-progress-term">  
            ${final_date === null ? 
            `${info_i('transfer-info-initial-date', `Início: ${date_format_timestamp(initial_date)}`, 'fa-brands fa-angellist')}`
            :
            `${info_i('transfer-info-final-date', `Término: ${date_format_timestamp(final_date)}`, 'fa-solid fa-flag-checkered')}`
            }
            ${info_i('transfer-info-term-date', `Prazo: ${date_format_timestamp(term_date)}`, 'fa-solid fa-file-contract')}
            <div class="countdown" data-termdate="${term_date}">
                <i class="fa-solid fa-hourglass-half"></i>
                <h3></h3>
            </div>
    </div>
    `
}

export default transfer_info_progress_term;