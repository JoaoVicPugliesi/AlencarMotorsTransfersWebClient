function transfer_info_i (id, content, icon) {
    return `
        <div id="${id}" class="transfer-info-i">
            <i class="${icon}"></i>
            <h3>${content}</h3>
        </div>
    `
}

export default transfer_info_i;