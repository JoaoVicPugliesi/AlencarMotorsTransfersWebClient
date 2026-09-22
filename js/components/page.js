import header from "./page_parts/header/header.js";

function page () {
    return `
        <div id="page">
            ${header()}
        </div>
    `
}

export default page;