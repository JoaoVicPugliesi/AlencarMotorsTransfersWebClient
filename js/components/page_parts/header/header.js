function header () {
    return `
    <div id="header">
        <div id="header-logo">
            <a href="https://www.alencarmotors.com">
                <img src="https://res.cloudinary.com/dibxo0toz/image/upload/v1788891274/alencar_motors_logo.svg" alt="Alencar Motors Logo"></img>
            </a>
        </div>
        <div id="header-options">
            <div id="header-options-profile-toggle">
                <div><i class="fa-solid fa-circle-user"></i></div>
                <div><h3>Natália Alencar</h3></div>
                <div><i class="fa-solid fa-angle-down"></i></div>
            </div>
            <div id="header-options-notifications-toggle">
                <i class="fa-solid fa-bell"></i>
                <div id="header-options-notifications-toggle-number">
                    <h3>2</h3>
                </div>
            </div>
        </div>
    </div>
    `
}

export default header;