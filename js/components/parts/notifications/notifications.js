import title from "../../helpers/title.js";

function notifications () {
    return `
        <div class="notifications">
            ${title('toggles-title', 'Notificações')}
            <div id="notifications-display"></div>
        </div>
    `
}

export default notifications;