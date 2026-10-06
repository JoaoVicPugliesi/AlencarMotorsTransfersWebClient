import page from "../components/page.js";
import page_builder from "../helpers/page_builder.js";
import play_sound_effect from "../helpers/sound_effects/play_sound_effect.js";
import use_cases_caller from "./use_cases_caller.js";

function page_composer () {
    const body = document.getElementById('body');
    page_builder(body, page);
    use_cases_caller();
    document.addEventListener('click', () => {
        play_sound_effect('click');
    });
}

export default page_composer;