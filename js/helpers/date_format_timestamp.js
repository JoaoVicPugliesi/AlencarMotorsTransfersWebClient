function date_format_timestamp (timestamp) {
    const formatter = timestamp.split('T');
    const formatted = formatter[0].split('-').reverse().join('-');
    return formatted;
}

export default date_format_timestamp;