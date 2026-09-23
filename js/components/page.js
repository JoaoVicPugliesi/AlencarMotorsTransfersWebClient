import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
// import login from "./parts/login/login.js";
// ${login()};

function page() {
    return `
        <div id="page">
            ${header()}
           <div id="main">
                ${profile()}
                ${transfers()}
                ${notifications()}
           </div>
        </div>
    `
}

export default page;