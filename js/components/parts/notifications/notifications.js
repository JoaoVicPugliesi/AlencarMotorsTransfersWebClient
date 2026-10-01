import title from "../../helpers/title.js";
import notification from "./parts/notification.js";

function notifications () {
    return `
        <div class="notifications">
            ${title('toggles-title', 'Notificações')}
            <div id="notifications-display">
                ${notification({
                    id: 1,
                    transfer_id: 2,
                    description: 'Dai adicionou uma nova observação na transferência XDFGHT', 
                    is_viewed: false, 
                    timestamp: '10H'
                })}
                ${notification({
                    id: 1,
                    transfer_id: 2,
                    description: 'Dai adicionou uma nova observação na transferência XDFGHT', 
                    is_viewed: true, 
                    timestamp: '2D'
                })}
                
            </div>
        </div>
    `
}

export default notifications;