import transfer from './parts/transfer/transfer.js';
import transfers_searchbar from './parts/transfers_searchbar.js';


function transfers () {
    return `
        <div class="transfers">
            ${transfers_searchbar()}
            <div class="transfers-display">
                ${transfer('pending', 'João Victor Lima Almeida Pugliesi', 'QLP2668', 'ONIX', 'XXXXXX')}
                ${transfer('delayed', 'Lucas Da Silva Ribeiro Machado', 'WVT2568', 'STRADA', 'XYZFGD')}
            </div>
        </div>
    `
}

export default transfers;