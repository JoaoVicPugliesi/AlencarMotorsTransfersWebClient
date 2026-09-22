function input(id, placeholder, icon) {
    return `
        <div class="input-holder">
            <input id="${id}" class="input" placeholder="${placeholder}">
            <div class="input-holder-i">
                <i class="${icon}"></i>
            </div>
        </div>
    `
}

export default input;