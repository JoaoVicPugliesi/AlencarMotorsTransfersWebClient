import info_i from "../../../helpers/info_i.js";

function participant (params) {
    return `
    <div class="participant" data-id="${params.id}" data-selected="${false}">
        ${info_i('participant-name', `${params.username}`, 'fa-solid fa-circle-user')}
        ${info_i('participant-role', `${params.role === 'admin' ? 'Admin' : 'User'}`, 'fa-solid fa-sitemap')}
    </div>
    `
}

export default participant;