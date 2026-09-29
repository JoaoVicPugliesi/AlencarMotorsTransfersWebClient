function profile_info () {
    const user = JSON.parse(localStorage.getItem('user'));
    return `
    <div id="profile-info">
        <div id="profile-info-icon"><i class="fa-solid fa-circle-user"></i></div>
        <div id="profile-info-name"><h3>${user.username}</h3></div>
        <div id="profile-info-role"><h3>${user.role === 'admin' ? 'Administrador' : 'Usuário'}</h3></div>
    </div>
    `
}

export default profile_info;