import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
import transfer_view from "./parts/transfer_view/transfer_view.js";
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
                ${transfer_view()}
           </div>
        </div>
    `
}

export default page;