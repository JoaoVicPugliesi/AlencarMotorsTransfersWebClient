import header from "./parts/header/header.js";

function page () {
    return `
        <div id="page">
            ${header()}
        </div>
    `
}

export default page;