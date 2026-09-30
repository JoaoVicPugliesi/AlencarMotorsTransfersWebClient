import format_status from "../../../../../helpers/format_status.js";

function observation({ id, title, status, initial_date }) {
    return `
        <div class="observation ${status}" data-id="${id}">
            <div class="observation-title"> 
                <p>${title}</p>
            </div>
            <div class="observation-info"> 
                <h3>${format_status(status)}</h3>
                <h3>HÁ ${initial_date}</h3>    
            </div>
        </div>
    `
}

export default observation;