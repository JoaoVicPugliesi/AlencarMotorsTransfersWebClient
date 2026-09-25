import header_logo from "./parts/header_logo.js";
import header_options from "./parts/header_options.js";

function header (logged) {
    return `
    <div id="header">
       ${header_logo()}
       ${logged ? header_options() : ''}
    </div>
    `
}

export default header;