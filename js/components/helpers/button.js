function button (id, icon, name, color, dataset_id) {
    return `
        <button id="${id}" class="button ${color}" data-id=""${dataset_id ? dataset_id : null}>
            ${icon !== null ? `<i class="${icon}"></i>` : ''}
            <h3>${name}</h3>
        </button>
    `
}

export default button;