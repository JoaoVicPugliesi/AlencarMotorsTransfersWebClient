import confirm_form from "./confirm_form.js";
import title from "../../../helpers/title.js";

function confirm (title_content, id, action, action_i) {
    return `
    <div class="form-holder">
        ${title('main-title', `${title_content}`)}
        ${confirm_form(id, action, action_i)}
    </div>
    `
}

export default confirm;