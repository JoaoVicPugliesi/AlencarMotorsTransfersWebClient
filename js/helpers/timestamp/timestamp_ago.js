function timestamp_ago (timestamp) {
    const now = new Date();
    const date = new Date(timestamp);
    const difference = now - date;
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if(days > 0) return `${days}d`; 
    if(hours > 0) return `${hours}h`; 
    if(minutes > 0) return `${minutes}m`;
    return `${seconds}s`; 
}

export default timestamp_ago;