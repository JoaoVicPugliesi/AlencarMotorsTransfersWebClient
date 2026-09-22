function input(id, placeholder, maxlength, icon) {
    return `
        <div class="input-holder">
            <input id="${id}" class="input" placeholder="${placeholder}" maxlength="${maxlength}">
            <div class="input-holder-i">
                <i class="${icon}"></i>
            </div>
        </div>
    `
}

export default input;