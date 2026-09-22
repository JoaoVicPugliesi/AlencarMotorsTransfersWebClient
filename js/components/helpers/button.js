function button (id, icon, name, color) {
    return `
        <button id="${id}" class="button ${color}">
            ${icon !== null ? `<i class="${icon}"></i>` : ''}
            <h3>${name}</h3>
        </button>
    `
}

export default button;