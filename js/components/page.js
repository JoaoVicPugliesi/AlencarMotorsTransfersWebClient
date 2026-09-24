import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
import add_transfer from "./parts/profile/parts/add_transfer/add_transfer.js";

function page() {
    return `
        <div id="page">
            ${header()}
           <div id="main">

                ${profile()}
                ${add_transfer()}

                ${transfers()}
                ${notifications()}
           </div>
        </div>
    `
}

export default page;