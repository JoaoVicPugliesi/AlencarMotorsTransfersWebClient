import get_observations_interface from '../../../../../use_cases/observations/get_observations_interface/get_observations_interface.js';
import button from '../../../../helpers/button.js';
import title from '../../../../helpers/title.js'
import configs from './configs.js';
import render_buttons from './render_buttons.js';

function render_related(mode, params) {
    const user = JSON.parse(localStorage.getItem('user'));
    if (mode === 'transfers') {
        return `
            <div id="painel-related">
                <div id="painel-related-observations">
                    ${title('sections-title', 'Observações')}

                    <div id="painel-related-observations-display">
                        ${params.observations ?
                `
                                ${get_observations_interface(params.observations)}
                            `
                :
                `
                            <h3>Sem observações</h3>
                            `
            }
                    </div>
                </div>

                <div id="painel-related-options">
                    ${title('sections-title', 'Opções')}
                   <div id="painel-related-options-commands">
                    ${(() => {
                    if (user.role == 'admin') {
                        if (params.status == 'pending') {
                            return render_buttons(configs.transfers.buttons);
                        }
                        if (params.status == 'concluded') {
                            return `
                            ${button(
                            'transfers-comeback',
                            'fa-solid fa-arrow-left-long',
                            'Voltar',
                            'blue'
                            )}
                            ${button(
                            'transfers-reactivate',
                            'fa-solid fa-unlock',
                            'Reativar',
                            'blue'
                            )}
                        `
                        }
                    }
                return button(
                    'transfers-comeback',
                    'fa-solid fa-arrow-left-long',
                    'Voltar',
                    'blue'
                );
            })()
            }
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

            <div id="painel-related-options-commands">
                ${(() => {
                if (user.role == 'admin') {
                    if (params.status == 'pending') {
                        return render_buttons(configs.observations.buttons);
                    }
                    if (params.status == 'concluded') {
                        return `
                            ${button(
                            'observations-comeback',
                            'fa-solid fa-arrow-left-long',
                            'Voltar',
                            'blue'
                            )}
                            ${button(
                            'observations-reactivate',
                            'fa-solid fa-unlock',
                            'Reativar',
                            'blue'
                            )}
                        `
                    }
                }
                    return button(
                        'observations-comeback',
                        'fa-solid fa-arrow-left-long',
                        'Voltar',
                        'blue'
                    );
                })()}
            </div>
            </div>
        </div>
    `;
}

export default render_related;