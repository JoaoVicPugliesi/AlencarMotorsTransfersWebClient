import title from "../../../helpers/title.js";
import edit_observation_form from "./edit_observation_form.js";

function edit_observation () {
    return `
    <div class="form-holder">
        ${title('main-title', 'Editar Observação')}
        ${edit_observation_form()}
    </div>
    `
}

export default edit_observation;