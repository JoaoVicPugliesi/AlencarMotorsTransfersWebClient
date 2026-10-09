import get_transfers from "../../../server/use_cases/transfers/get_transfers.js";
import display_transfers_interface from "./helpers/display_transfers_interface.js";
import countdown from '../../../helpers/countdown/countdown.js';

async function get_transfers_interface() {
    const user = JSON.parse(localStorage.getItem('user'));
    const transfers_i = await get_transfers({ id: user.id });
    const { status, json } = transfers_i;
    const { transfers } = json;
    if (status !== 200 || !transfers) localStorage.setItem('transfers', JSON.stringify([]));
    if (status === 200) localStorage.setItem('transfers', JSON.stringify(transfers));
    display_transfers_interface(transfers === null ? [] : transfers); 
    countdown();
}

export default get_transfers_interface;