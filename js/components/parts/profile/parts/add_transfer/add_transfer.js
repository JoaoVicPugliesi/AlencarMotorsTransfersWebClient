import button from "../../../../helpers/button.js";
import info_i from "../../../../helpers/info_i.js";
import primary_input from "../../../../helpers/inputs/primary_input.js";
import title from "../../../../helpers/title.js";

function add_transfer () {
    return ` 
        <div class="add-transfer">
            ${title('main-title', 'Adicionar Transferência')}
            <div class="add-transfer-form">
                <div class="add-transfer-form-participants-options">
                    <div class="participant">
                        ${info_i('participant-name', 'André Alencar', 'fa-solid fa-circle-user')}
                    </div>
                    <div class="participant">
                        ${info_i('participant-name', 'André Alencar', 'fa-solid fa-circle-user')}
                    </div>
                    <div class="participant">
                        ${info_i('participant-name', 'André Alencar', 'fa-solid fa-circle-user')}
                    </div>  
                </div>
                ${primary_input('add-transfer-name', 'Nome do Cliente', 100, 'fa-solid fa-address-card')}
                ${primary_input('add-transfer-plate', 'Placa', 7, 'fa-solid fa-certificate')}
                ${primary_input('add-transfer-vehicle', 'Veículo', 50, 'fa-solid fa-car')}
                <div class="add-transfer-form-participants">
                    ${title('sections-title', 'Adicione os participantes: ')}
                    ${primary_input('add-transfer-participants', 'X Participantes', 1000, 'fa-solid fa-users-line')}
                </div>
                <div class="add-transfer-options">
                    ${button('add-transfer-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue')}
                    ${button('add-transfer-add', 'fa-solid fa-plus', 'Adicionar', 'green')}
                </div>
            </div>
        </div>
    `
}

export default add_transfer;