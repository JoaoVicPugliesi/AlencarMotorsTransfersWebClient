import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"

function page () {
    return `
        <div id="page">
            ${header()}
            ${profile()}
            ${notifications()}
        </div>
    `
}

export default page;