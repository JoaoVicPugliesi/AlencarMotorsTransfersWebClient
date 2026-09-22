import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";

function page () {
    return `
        <div id="page">
            ${header()}
            ${profile()}
        </div>
    `
}

export default page;