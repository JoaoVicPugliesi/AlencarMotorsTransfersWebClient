import info_i from "../../../../../helpers/info_i.js";

function transfer_info(name, plate, vehicle, code) {
    return `
    <div class="transfer-info">
          ${info_i('transfer-info-name', `${name}`, 'fa-regular fa-id-card')}
          ${info_i('transfer-info-plate', `${plate}`, 'fa-solid fa-certificate')}
          ${info_i('transfer-info-vehicle', `${vehicle}`, 'fa-solid fa-car')}
          ${info_i('transfer-info-code', `${code}`, 'fa-solid fa-code')}
    </div>
    `
}

export default transfer_info;