function profile_info (user) {
    let role;
    if(user) {
        role = user.role === 'admin' ? 'Administrador' : 'Usuário'
    }
    return `
    <div id="profile-info">
        <div id="profile-info-icon"><i class="fa-solid fa-circle-user"></i></div>
        <div id="profile-info-name"> ${user ?  `<h3>${user.username}</h3>` : `<h3>null</h3>`}</div>
        <div id="profile-info-role"><h3>${user ?  `<h3>${role}</h3>` : `<h3>null</h3>`}</h3></div>
    </div>
    `
}

export default profile_info;