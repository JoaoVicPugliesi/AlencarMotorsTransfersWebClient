import info_i from "../../../helpers/info_i.js";

function participant (params) {
    return `
    <div class="participant" data-id="${params.id}">
        ${info_i('participant-name', `${params.name}`, 'fa-solid fa-circle-user')}
    </div>
    `
}

export default participant;