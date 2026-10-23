import show_message from "../../../helpers/messages/show_message.js";
import open_close_painel from "../../painel/open_close_painel.js";
import get_transfer_d from "./helpers/get_transfer_d.js";

function get_transfer_interface() {
    open_close_painel({
        trigger: '.transfer',
        mode: 'transfers',
        get_data: async (el) => {
            const loading_message = show_message(
                'loading',
                'Carregando...'
            );
            const d = await get_transfer_d(el);
            loading_message.remove();
            return d
        }
    });
}

export default get_transfer_interface;