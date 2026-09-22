import profile_info from "./parts/profile_info.js";
import profile_options from "./parts/profile_options.js";
import profile_title from "./parts/profile_title.js";

function profile () {
    return `
        <div class="profile">
            ${profile_title()}
            ${profile_info()}
            ${profile_options()}
        </div>
    `
}

export default profile;
