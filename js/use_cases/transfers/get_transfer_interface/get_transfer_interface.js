import open_close_painel from "../../painel/open_close_painel.js";
import get_transfer_d from "./helpers/get_transfer_d.js";

function get_transfer_interface() {
    open_close_painel({
        trigger: '.transfer',
        mode: 'transfers',
        get_data: async (el) => {
            return await get_transfer_d(el);
        }
    });
}

export default get_transfer_interface;