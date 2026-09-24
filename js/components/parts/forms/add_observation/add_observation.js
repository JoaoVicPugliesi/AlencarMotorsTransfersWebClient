import title from "../../../helpers/title.js";
import add_observation_form from "./add_observation_form.js";

function add_observation () {
    return `
        <div class="form-holder">
            ${title('main-title', 'Adicionar nova observação')}
            ${add_observation_form()}
        </div>
    `
}

export default add_observation;