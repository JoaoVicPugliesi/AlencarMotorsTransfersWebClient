function get_current_user() {
    const user = localStorage.getItem('user');

    if (!user) return null;

    try {
        return JSON.parse(user);
    } catch {
        localStorage.removeItem('user');
        return null;
    }
}

function set_current_user(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

function clear_current_user() {
    localStorage.removeItem('user');
}

export { get_current_user, set_current_user, clear_current_user };