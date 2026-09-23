import transfer_info_i from "../../helpers/transfer_info_i.js";

function transfer_view(params) {
    const { id, status, name, plate, vehicle, code, initial_date, final_date, term_date } = params;
    return `
        <div id="transfer-view" data-id=${id}>
            <div class="transfer-view-info ${status}">
                <div id="transfer-view-info-basic">
                    ${transfer_info_i('transfer-view-info-name', `${name}`, 'fa-regular fa-id-card')}
                    ${transfer_info_i('transfer-view-info-plate', `${plate}`, 'fa-solid fa-certificate')}
                    ${transfer_info_i('transfer-view-info-vehicle', `${vehicle}`, 'fa-solid fa-car')}
                    ${transfer_info_i('transfer-view-info-code', `${code}`, 'fa-solid fa-code')}
                </div>
                <div id="transfer-view-info-progress">
                    ${transfer_info_i('transfer-view-info-initial-date', `Data de início: ${initial_date}`, 'fa-brands fa-angellist')}
                    ${transfer_info_i('transfer-view-info-pending-observations', `2 observações pendentes`, 'fa-solid fa-spinner')}
                    ${transfer_info_i('transfer-view-info-concluded-observations', `2 observações concluídas`, 'fa-solid fa-check')}
                    ${transfer_info_i('transfer-view-info-final-date', `Data de término: ${final_date !== null ? `${final_date}` : '...'}`, 'fa-solid fa-flag-checkered')}
                </div>
                <div id="transfer-view-info-term">
                    ${transfer_info_i('transfer-view-info-term-date', `Prazo: ${term_date}`, 'fa-solid fa-file-contract')}
                    <div>
                        ${transfer_info_i('transfer-view-info-term-countdown', `1D 7H 24M 22S`, 'fa-solid fa-hourglass-half')}
                    </div>
                </div>  
            </div>

            <div id="transfer-view-related"> 

            </div>
        </div>
    `
}

export default transfer_view;