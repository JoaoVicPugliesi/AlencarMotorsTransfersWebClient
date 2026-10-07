import render_info from "./render_info.js";

function render_term(fields, params) {
    console.log(params);
    return `
        ${render_info(fields, params)}
        <div>
             <div class="countdown" data-params='${JSON.stringify({
                initial_date: params.initial_date,
                final_date: params.final_date,
                term_date: params.term_date,
                status: params.status
             })}'>
                <i class="fa-solid fa-hourglass-half"></i>
                <h3>${params.status === 'delayed' ? 'ATRASADO' : 'Carregando...'}</h3>
            </div>
        </div>
    `;
}   

export default render_term;