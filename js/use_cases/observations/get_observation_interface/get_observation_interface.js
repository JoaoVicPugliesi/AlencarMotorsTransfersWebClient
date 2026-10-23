import show_message from "../../../helpers/messages/show_message.js";
import open_close_painel from "../../painel/open_close_painel.js";
import get_observation_d from "./helpers/get_observation_d.js";

function get_observation_interface() {
    open_close_painel({
        trigger: '.observation',
        mode: 'observations',
        get_data: async (el) => {
            const loading_message = show_message(
                'loading',
                'Carregando...'
            );
            const d = await get_observation_d(el);
            loading_message.remove();
            return d;
        }
    });
}

export default get_observation_interface;