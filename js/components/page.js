import header from "./parts/header/header.js";
import profile from "./parts/profile/profile.js";
import notifications from "./parts/notifications/notifications.js"
import transfers from "./parts/transfers/transfers.js";
import add_observation from "./parts/forms/add_observation/add_observation.js";

function page() {
    return `
        <div id="page">
            ${header()}
           <div id="main">
                ${profile()}
                ${transfers()}
                ${notifications()}
                ${add_observation()}
           </div>
        </div>
    `
}

export default page;