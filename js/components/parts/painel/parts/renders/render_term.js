import render_info from "./render_info.js";
import countdown from '../../../../../helpers/countdown.js';

function render_term(fields, params) {
    return `
        ${render_info(fields, params)}

        <div>
             <div class="countdown" data-termdate="${params.term_date}">
                <i class="fa-solid fa-hourglass-half"></i>
                <h3>Carregando...</h3>
            </div>
        </div>
    `;
}

export default render_term;