function main_input(id, placeholder, maxlength, icon) {
    return `
        <div class="main-input-holder">
            <input id="${id}" class="main-input" placeholder="${placeholder}" maxlength="${maxlength}">
            <div class="main-input-holder-i">
                <i class="${icon}"></i>
            </div>
        </div>
    `
}

export default main_input;