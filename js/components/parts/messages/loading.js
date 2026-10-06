function loading(message) {
    return `
        <div class="loading-message">
            <svg
                viewBox="0 0 76 76"
                class="loading-message-icon"
            >
                <circle
                    cx="38"
                    cy="38"
                    r="34"
                    class="loading-message-spinner"
                />
            </svg>

            <h1 class="loading-message-title">
                ${message}
            </h1>
        </div>
    `;
}

export default loading;