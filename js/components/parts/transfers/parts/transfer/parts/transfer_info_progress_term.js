import date_format_timestamp from "../../../../../../helpers/date_format_timestamp.js";
import info_i from "../../../../../helpers/info_i.js";

function transfer_info_progress_term ({ id, initial_date, final_date, term_date, status }) {
    return `
    <div class="transfer-info-progress-term">  
            ${final_date === null ? 
            `${info_i('transfer-info-initial-date', `Início: ${date_format_timestamp(initial_date)}`, 'fa-brands fa-angellist')}`
            :
            `${info_i('transfer-info-final-date', `Término: ${date_format_timestamp(final_date)}`, 'fa-solid fa-flag-checkered')}`
            }
            ${info_i('transfer-info-term-date', `Prazo: ${date_format_timestamp(term_date)}`, 'fa-solid fa-file-contract')}
            <div class="countdown" data-params='${JSON.stringify({
                id: id,
                mode: 'transfers',
                initial_date: initial_date,
                final_date: final_date,
                term_date: term_date,
                status: status
             })}'>
                <i class="fa-solid fa-hourglass-half"></i>
                <h3>${status === 'delayed' ? 'ATRASADO' : 'Carregando...'}</h3>
            </div>
    </div>
    `
}

export default transfer_info_progress_term;