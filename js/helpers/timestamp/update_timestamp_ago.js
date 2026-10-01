import timestamp_ago from "./timestamp_ago.js";

function update_timestamp_ago () {
    document.querySelectorAll('.timestamp-ago').forEach((e) => {
        e.textContent = `Há ${timestamp_ago(e.dataset.timestamp)}`;
    });
}

function start_timestamp_ago_counter () {
    update_timestamp_ago();
    setInterval(update_timestamp_ago, 1000);
}

export default start_timestamp_ago_counter;