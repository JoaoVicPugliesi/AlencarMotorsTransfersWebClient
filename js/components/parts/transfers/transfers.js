import transfers_searchbar from './parts/transfers_searchbar.js';

function transfers () {
    return `
        <div class="transfers">
            ${transfers_searchbar()}
            <div class="transfers-display"></div>
        </div>
    `
}

export default transfers;