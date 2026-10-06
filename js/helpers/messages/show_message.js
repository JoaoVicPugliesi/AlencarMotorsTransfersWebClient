import loading from '../../components/parts/messages/loading.js';
import error from '../../components/parts/messages/error.js';
import success from '../../components/parts/messages/success.js';

function show_message(mode, message, delay = 3000) {
    const container = document.querySelector('#body');
    console.log(container);
    container.insertAdjacentHTML('beforeend', '<div class="message-holder"></div>');
    const message_holder = container.querySelector('.message-holder');
    if (mode === 'loading') {
        message_holder.innerHTML = loading(message);
        container.append(message_holder);
        requestAnimationFrame(() => {
            message_holder.classList.add('active');
        });
        return message_holder;
    }
    message_holder.innerHTML =
        mode === 'success'
            ? success(message)
            : error(message);
    container.append(message_holder);
    requestAnimationFrame(() => {
        message_holder.classList.add('active');
    });
    setTimeout(() => {
        message_holder.classList.remove('active');
        setTimeout(() => {
            message_holder.remove();
        }, 1000);
    }, delay);
    return message_holder;
}

export default show_message;