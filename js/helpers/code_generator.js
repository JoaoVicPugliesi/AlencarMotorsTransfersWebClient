function code_generator() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 6; i++) {
        const random_index = Math.floor(Math.random() * chars.length);
        code += chars[random_index];
    }
    return code;
}

export default code_generator;