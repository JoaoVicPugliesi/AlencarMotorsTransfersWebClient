function format_status (status) {
    let formatted_status;
    if(status === 'delayed') formatted_status = 'ATRASADA';
    if(status === 'pending') formatted_status = 'PENDENTE';
    if(status === 'concluded') formatted_status = 'CONCLUÍDA';
    return formatted_status
}

export default format_status;