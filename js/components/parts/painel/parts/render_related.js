import title from '../../../helpers/title.js'
import observation from '../parts/observation.js'
import configs from './configs.js';
import render_buttons from './render_buttons.js';

function render_related(mode, params) {
    if (mode === 'transfers') {
        return `
            <div id="painel-related">
                <div id="painel-related-observations">
                    ${title('sections-title', 'Observações')}

                    <div id="painel-related-observations-display">

                        ${observation(
                            1,
                            'Problema no CNH',
                            'pending',
                            '16H'
                        )}

                        ${observation(
                            2,
                            'Problema na procuração',
                            'concluded',
                            '24H'
                        )}

                    </div>
                </div>

                <div id="painel-related-options">

                    ${title('sections-title', 'Opções')}

                    <div id="painel-related-options-commands">
                        ${render_buttons(configs.transfers.buttons)}
                    </div>

                </div>

            </div>
        `;
    }

    return `
        <div id="painel-related">

            <div id="painel-related-observations">

                ${title('sections-title', 'DESCRIÇÃO')}

                <div id="painel-related-observation-description">
                    <p>
                        ${params.description ?? 'Nenhuma descrição disponível.'}
                    </p>
                </div>

            </div>

            <div id="painel-related-options">

                ${title('sections-title', 'Opções')}

                <div id="painel-related-options-commands">
                    ${render_buttons(configs.observations.buttons)}
                </div>

            </div>

        </div>
    `;
}

export default render_related;