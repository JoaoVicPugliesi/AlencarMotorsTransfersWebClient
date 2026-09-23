function select_input(id, options) {
    return `
        <select id="${id}" class="select-input">
            ${options.map(option => `
                <option value="${option.value}">
                    ${option.label}
                </option>
            `).join('')}
            <div class="select-input-arrow-down">
                <i class="fa-solid fa-angle-down"></i>
            </div>
        </select>
    `;
}

export default select_input;