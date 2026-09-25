import confirm_form from "./confirm_form.js";
import title from "../../../helpers/title.js";

function confirm_f () {
    return `
    <div class="form-holder">
        ${title('main-title', 'Confirme sua identidade')}
        ${confirm_form()}
    </div>
    `
}

export default confirm_f;