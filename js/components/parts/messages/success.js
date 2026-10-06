function success(message) {
    return `
         <div class="success-message">
            <svg viewBox="0 0 76 76" class="success-message-icon">
                <circle cx="38" cy="38" r="36" />
                <path class="success-message-check" fill="none" stroke="#FAFAFA" stroke-width="5"
                stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" pathLength="1"
                d="M17.7,40.9l10.9,10.9l28.7-28.7" />
            </svg>
            <h1 class="success-message-title">${message}</h1>
        </div>
    `
}

export default success;