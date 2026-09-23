import info_i from "../../../../../helpers/info_i.js";

function transfer_info_progress_term (initial_date, final_date, term_date) {
    return `
    <div class="transfer-info-progress-term">  
        <div class="transfer-info-progress">
            ${info_i('transfer-info-initial-date', `Data de início: ${initial_date}`, 'fa-brands fa-angellist')}
            ${info_i('transfer-info-pending-observations', `2 observações pendentes`, 'fa-solid fa-spinner')}
            ${info_i('transfer-info-concluded-observations', `2 observações concluídas`, 'fa-solid fa-check')}
        </div>
        <div class="transfer-info-term">
            ${info_i('transfer-info-term-date', `Prazo: ${term_date}`, 'fa-solid fa-file-contract')}
            <div>
                ${info_i('transfer-info-term-countdown', `1D 7H 24M 22S`, 'fa-solid fa-hourglass-half')}
            </div>
        </div>
    </div>
    `
}

export default transfer_info_progress_term;