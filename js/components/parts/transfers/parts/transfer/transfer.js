function transfer(status, name, plate, vehicle, code) {
    return `
    <div class="transfer ${status}">
        <div class="transfer-info">
            <div class="transfer-info-name">
                <i class="fa-regular fa-id-card"></i>
                <h3>${name}</h3>
            </div>
            <div class="transfer-info-plate">
                <i class="fa-solid fa-certificate"></i>
                <h3>${plate}</h3>
            </div>
            <div class="transfer-info-vehicle">
                <i class="fa-solid fa-car"></i>
                <h3>${vehicle}</h3>
            </div>
            <div class="transfer-info-code">
                <i class="fa-solid fa-code"></i>
                <h3>${code}</h3>
            </div>
        </div>
        <div class="transfer-info-options">  
            <div class="transfer-info-options-progress">
                <div class="transfer-info-options-progress-initial-date">
                    <h3>Data de início: 25/09/2026</h3>
                </div>
                <div class="transfer-info-options-progress-pending-observations">
                    <h3>2 observações pendentes</h3>
                </div>
                <div class="transfer-info-options-progress-concluded-observations">
                    <h3>2 observações concluídas</h3>
                </div>
                <div class="transfer-info-options-progress-final-date">
                    <h3>Data de término: À terminar</h3>
                </div>
            </div>
            <div class="transfer-info-options-term">
                <div class="transfer-info-options-term-date">
                    <h3>Prazo: 02/10/2026</h3>
                </div>
                <div class="transfer-info-options-term-countdown">
                    <h3>Tempo restante: </h3>
                    <h3>1D 7H 24M 22S</h3>
                </div>
            </div>
        </div>
    </div>
    `
}

export default transfer;