import title from "../../helpers/title.js";
import profile_info from "./parts/profile_info.js";
import profile_options from "./parts/profile_options.js";

function profile () {
    const user = JSON.parse(localStorage.getItem('user'));
    return `
        <div class="profile">
            ${title('toggles-title', 'Perfil')}
            ${profile_info(user)}
            ${profile_options(user)}
        </div>
    `
}

export default profile;
