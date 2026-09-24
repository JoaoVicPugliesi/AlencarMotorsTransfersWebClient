import title from "../../../helpers/title.js";
import add_profile_form from "./add_profile_form.js";

function add_profile () {
    return `
        <div class="form-holder">
            ${title('main-title', 'Adicionar novo perfil')}
            ${add_profile_form()}
        </div>
    `
}

export default add_profile;