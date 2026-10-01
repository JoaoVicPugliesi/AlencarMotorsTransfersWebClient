import format_status from "../../../../../helpers/format_status.js";
import timestamp_ago from "../../../../../helpers/timestamp/timestamp_ago.js";

function observation({ id, title, status, initial_date }) {
    return `
        <div class="observation ${status}" data-id="${id}">
            <div class="observation-title"> 
                <p>${title}</p>
            </div>
            <div class="observation-info"> 
                <h3>${format_status(status)}</h3>
                <h3 class="timestamp-ago" data-timestamp="${initial_date}">HÁ ${timestamp_ago(initial_date)}</h3>    
            </div>
        </div>
    `
}

export default observation;