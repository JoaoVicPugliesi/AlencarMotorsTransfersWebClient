import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
import add_transfer from "./parts/profile/parts/forms/add_transfer/add_transfer.js";
import add_profile from "./parts/profile/parts/forms/add_profile/add_profile.js";

function page() {
    return `
        <div id="page">
            ${header()}
           <div id="main">
                ${profile()}
                ${add_transfer()}
                ${add_profile()}
                ${transfers()}
                ${notifications()}
           </div>
        </div>
    `
}

export default page;