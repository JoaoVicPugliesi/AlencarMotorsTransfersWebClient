import title from "../../../helpers/title.js";
import view_participants_form from "./view_participants_form.js";
import participant from '../../../../components/parts/forms/add_transfer/participant.js'

function view_participants () {
    return `
    <div class="form-holder">
        ${title('main-title', 'Participantes')}
        <div class="participants">
            ${participant({
                id: 'jaa',
                username: 'johnpugliesi',
                role: 'admin'
            })}
        </div>
        <div class="participant-results"></div>
        ${view_participants_form()}
    </div>
    `
}

export default view_participants;