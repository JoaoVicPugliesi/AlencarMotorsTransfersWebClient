import button from "../../../helpers/button.js";

function render_buttons(buttons) {
    return buttons
        .map(([id, icon, text, color]) =>
            button(id, icon, text, color)
        )
        .join('');
}

export default render_buttons