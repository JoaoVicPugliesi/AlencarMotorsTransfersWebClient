function transfer_info_options (initial_date, final_date, term_date) {
    return `
    <div class="transfer-info-options">  
        <div class="transfer-info-options-progress">
            <div class="transfer-info-options-progress-initial-date">
                <h3>Data de início: ${initial_date}</h3>
            </div>
            <div class="transfer-info-options-progress-pending-observations">
                <h3>2 observações pendentes</h3>
            </div>
            <div class="transfer-info-options-progress-concluded-observations">
                <h3>2 observações concluídas</h3>
            </div>
            <div class="transfer-info-options-progress-final-date">
                <h3>Data de término: ${final_date !== null ? final_date : 'À terminar'}</h3>
            </div>
        </div>
        <div class="transfer-info-options-term">
            <div class="transfer-info-options-term-date">
                <h3>Prazo: ${term_date}</h3>
            </div>
            <div class="transfer-info-options-term-countdown">
                <h3>Tempo restante: </h3>
                <h3>1D 7H 24M 22S</h3>
            </div>
        </div>
    </div>
    `
}

export default transfer_info_options;