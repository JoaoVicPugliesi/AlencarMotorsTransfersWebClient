function text_area (id, placeholder, maxlength) {
    return `
        <div class="text-area">
            <textarea id="${id}" placeholder="${placeholder}" maxlength="${maxlength ? maxlength : 1000}"></textarea>
            <div class="text-area-i">
                <i class="fa-solid fa-align-justify"></i>
            </div>
        </div>
    `
}

export default text_area;