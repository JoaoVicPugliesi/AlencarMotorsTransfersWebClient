function error(message) {
    return `
         <div class="error-message">
            <svg viewBox="0 0 76 76" class="error-message-icon">
                <circle cx="38" cy="38" r="36" />
                <path class="error-message-cross" fill="none" stroke="#FAFAFA" stroke-width="5"
                    stroke-linecap="round" stroke-linejoin="round" pathLength="1"
                    d="M24,24 L52,52 M52,24 L24,52" />
            </svg>
            <h1 class="error-message-title">${message}</h1>
        </div>
    `
}

export default error;