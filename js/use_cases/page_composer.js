import page from "../components/page.js";
import page_builder from "../helpers/page_builder.js";
import use_cases_caller from "./use_cases_caller.js";

function page_composer () {
    const body = document.getElementById('body');
    page_builder(body, page);
    use_cases_caller();
}

export default page_composer;