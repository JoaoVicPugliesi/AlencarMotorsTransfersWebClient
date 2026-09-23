import format_status from "../../../helpers/format_status.js";
import configs from "./parts/configs.js";
import render_info from "./parts/render_info.js";
import render_related from "./parts/render_related.js";
import render_term from "./parts/render_term.js";

function painel(mode, params) {

    const config = configs[mode];

    if (!config) {
        throw new Error(`Modo de painel inválido: ${mode}`);
    }

    return `
        <div id="painel" data-id="${params.id}">
            <div></div>
            <div class="painel-info ${params.status}">
                <div class="painel-info-basic">
                    ${render_info(config.basic, params)}
                    ${
                        mode === 'observations'
                            ? `
                                <div class="painel-info-basic-status">
                                    ${format_status(params.status)}
                                </div>
                            `
                            : ''
                    }
                </div>
                <div class="painel-info-progress">
                    ${render_info(config.progress, params)}
                </div>
                <div class="painel-info-term">
                    ${render_term(config.term, params, mode)}
                </div>
            </div>
            ${render_related(mode, params)}
        </div>
    `;
}

export default painel;