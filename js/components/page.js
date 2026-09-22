import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import main from "./parts/main/main.js";
// import login from "./parts/login/login.js";
// ${login()};

function page () {
    return `
        <div id="page">
            ${header()}
            ${profile()}
            ${main()}
            ${notifications()}
        </div>
    `
}

export default page;