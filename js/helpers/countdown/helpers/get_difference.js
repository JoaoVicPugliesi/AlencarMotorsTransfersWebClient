function get_difference (term_date) {
    const now = Date.now();
    const t_date = new Date(term_date).getTime();
    const diff_i = t_date - now;
    if(diff_i <= 0) return null;
    return diff_i;
}

export default get_difference;