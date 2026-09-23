import transfer_info_i from "../../../../../helpers/transfer_info_i.js";

function transfer_info_progress_term (initial_date, final_date, term_date) {
    return `
    <div class="transfer-info-progress-term">  
        <div class="transfer-info-progress">
            ${transfer_info_i('transfer-info-initial-date', `Data de início: ${initial_date}`, 'fa-brands fa-angellist')}
            ${transfer_info_i('transfer-info-pending-observations', `2 observações pendentes`, 'fa-solid fa-spinner')}
            ${transfer_info_i('transfer-info-concluded-observations', `2 observações concluídas`, 'fa-solid fa-check')}
            ${transfer_info_i('transfer-info-final-date', `Data de término: ${final_date !== null ? `${final_date}` : '...'}`, 'fa-solid fa-flag-checkered')}
        <div class="transfer-info-term">
            ${transfer_info_i('transfer-info-term-date', `Prazo: ${term_date}`, 'fa-solid fa-file-contract')}
            <div>
                ${transfer_info_i('transfer-info-term-countdown', `1D 7H 24M 22S`, 'fa-solid fa-hourglass-half')}
            </div>
        </div>
    </div>
    `
}

export default transfer_info_progress_term;