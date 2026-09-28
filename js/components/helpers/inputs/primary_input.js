function primary_input(id, type, placeholder, maxlength, icon, value) {
    return `
        <div class="primary-input-holder">
            <input id="${id}" type="${type}" class="primary-input" placeholder="${placeholder}" maxlength="${maxlength}" value="${value ? value : ''}">
            ${type === 'password' ?
            `
            <div class="primary-input-holder-eye">
                <i class="fa-solid fa-eye"></i>
            </div>
            `
            :
            `
            <div class="primary-input-holder-i">
                <i class="${icon}"></i>
            </div>
            `
        }
        </div>
    `
}

export default primary_input;