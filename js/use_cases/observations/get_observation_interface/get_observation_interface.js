import open_close_painel from "../../painel/open_close_painel.js";
import get_observation_d from "./helpers/get_observation_d.js";

function get_observation_interface() {
    open_close_painel({
        trigger: '.observation',
        mode: 'observations',
        get_data: async (el) => {
            return await get_observation_d(el);
        }
    });
}

export default get_observation_interface;