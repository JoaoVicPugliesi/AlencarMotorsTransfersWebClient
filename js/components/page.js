import header from "./parts/header/header.js";
import login from '../components/parts/login/login.js'

function page() {
    return `
        <div id="page">
            ${header(false)}
           <div id="main">
               ${login()}
           </div>
        </div>
    `
}

export default page;