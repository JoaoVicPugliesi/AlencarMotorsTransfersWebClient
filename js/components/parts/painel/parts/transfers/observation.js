import format_status from "../../../../../helpers/format_status.js";

function observation(id, title, status, timestamp) {
    return `
        <div class="observation ${status}" data-id="${id}">
            <div class="observation-title"> 
                <p>${title}</p>
            </div>
            <div class="observation-info"> 
                <h3>${format_status(status)}</h3>
                <h3>HÁ ${timestamp}</h3>    
            </div>
        </div>
    `
}

export default observation;