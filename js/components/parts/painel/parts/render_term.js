import info_i from "../../../helpers/info_i.js";
import render_info from "./render_info.js";

function render_term(fields, params, mode) {
    return `
        ${render_info(fields, params)}

        <div>
            ${info_i(
                `${mode}-term-countdown`,
                '1D 7H 24M 22S',
                'fa-solid fa-hourglass-half'
            )}
        </div>
    `;
}

export default render_term;