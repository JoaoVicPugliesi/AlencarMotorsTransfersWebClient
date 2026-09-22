import title from "../../helpers/title.js";
import profile_info from "./parts/profile_info.js";
import profile_options from "./parts/profile_options.js";

function profile () {
    return `
        <div class="profile">
            ${title('Perfil')}
            ${profile_info()}
            ${profile_options()}
        </div>
    `
}

export default profile;
