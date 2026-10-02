function header_options () {
    const user = JSON.parse(localStorage.getItem('user'));
    return `
    <div id="header-options">
        <div id="header-options-profile-toggle">
            <div><i class="fa-solid fa-circle-user"></i></div>
            <div id="header-username">
                ${user ?  `<h3>${user.username}</h3>` : `<h3>null</h3>`}
            </div>
            <div class="header-options-profile-toggle-arrow-down"><i class="fa-solid fa-angle-down"></i></div>
        </div>
        <div id="header-options-notifications-toggle">
            <i class="fa-solid fa-bell"></i>
            <div id="header-options-notifications-toggle-number">
                <h3>2</h3>
            </div>
        </div>
    </div>
    `
}

export default header_options;