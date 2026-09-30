import observation from "../../../components/parts/painel/parts/transfers/observation.js";

function get_observations_interface (observations) {
    let content = [];
    for(let i = 0; i < observations.length; i++) {
        const observation_i = observations[i];
        console.log(observation_i)
        const n_observation = observation({
            id: observation_i.id,
            title: observation_i.title,
            status: observation_i.status,
            initial_date: observation_i.initial_date
        });
        content.push(n_observation);
    }
    console.log(content.join(' '));
    return content.join(' ');
}

export default get_observations_interface;