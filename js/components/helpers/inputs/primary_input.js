function primary_input(id, type, placeholder, maxlength, icon, value) {
    return `
        <div class="primary-input-holder">
            <input id="${id}" type="${type}" class="primary-input" placeholder="${placeholder}" maxlength="${maxlength}" value="${value ? value : ''}">
            <div class="primary-input-holder-i">
                <i class="${icon}"></i>
            </div>
        </div>
    `
}

export default primary_input;