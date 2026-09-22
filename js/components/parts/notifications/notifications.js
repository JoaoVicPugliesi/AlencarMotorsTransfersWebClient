import notification from "./parts/notification.js";

function notifications () {
    return `
        <div class="notifications">
            <div id="notifications-title">
                <h3>Perfil</h3>
            </div>
            <div id="notifications-display">
                ${notification(1, 'Dai adicionou uma nova observação na transferência XDFGHT', false, '10H')}
                ${notification(2, 'Dai marcou como concluída uma observação na transferência XYZDFG', true, '10H')}
            </div>
        </div>
    `
}

export default notifications;