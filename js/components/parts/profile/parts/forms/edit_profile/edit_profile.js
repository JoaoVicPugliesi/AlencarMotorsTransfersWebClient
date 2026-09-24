import title from "../../../../../helpers/title.js";
import edit_profile_form from "./edit_profile_form.js";

function edit_profile () {
    return `
    <div class="profile-form-holder">
        ${title('main-title', 'Editar perfil')}
        ${edit_profile_form()}
    </div>
    `
}

export default edit_profile;