import page from "../components/page.js";
import page_builder from "../helpers/page_builder.js";

function page_composer () {
    const body = document.getElementById('body');
    page_builder(body, page);
}

export default page_composer;