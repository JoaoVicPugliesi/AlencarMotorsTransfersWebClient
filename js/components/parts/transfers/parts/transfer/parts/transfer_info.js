function transfer_info (name, plate, vehicle, code) {
    return `
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
    `
}

export default transfer_info;