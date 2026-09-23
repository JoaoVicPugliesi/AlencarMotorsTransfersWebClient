function info_i (id, content, icon) {
    return `
        <div id="${id}" class="info-i">
            <i class="${icon}"></i>
            <h3>${content}</h3>
        </div>
    `
}

export default info_i;