import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
import edit_transfer from "./parts/forms/edit_transfer/edit_transfer.js";

function page() {
    return `
        <div id="page">
            ${header()}
           <div id="main">
                ${profile()}
                ${transfers()}
                ${notifications()}
                ${edit_transfer()}
           </div>
        </div>
    `
}

export default page;