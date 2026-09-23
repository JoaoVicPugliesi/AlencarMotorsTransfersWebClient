import transfer_info_i from "../../../../../helpers/transfer_info_i.js";

function transfer_info(name, plate, vehicle, code) {
    return `
    <div class="transfer-info">
          ${transfer_info_i('transfer-info-name', `${name}`, 'fa-regular fa-id-card')}
          ${transfer_info_i('transfer-info-plate', `${plate}`, 'fa-solid fa-certificate')}
          ${transfer_info_i('transfer-info-vehicle', `${vehicle}`, 'fa-solid fa-car')}
          ${transfer_info_i('transfer-info-code', `${code}`, 'fa-solid fa-code')}
    </div>
    `
}

export default transfer_info;