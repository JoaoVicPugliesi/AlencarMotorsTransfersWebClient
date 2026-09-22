import header_logo from "./parts/header_logo.js";
import header_options from "./parts/header_options.js";

function header () {
    return `
    <div id="header">
       ${header_logo()}
       ${header_options()}
    </div>
    `
}

export default header;