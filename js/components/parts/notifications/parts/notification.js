function notification(params) {
    const { user_id, is_viewed, id, transfer_id, content, created_at } = params;
    return `
    <div class="notification ${is_viewed ? 'viewed' : 'not_viewed'}">
        <div class="notification-description">
            <p>${content}</p>
        </div>
        <div class="notification-info">
            <div class="notification-info-isviewed">
                <h3>${is_viewed ? 'Lida' : 'Não lida'}</h3>
            </div>
            <div>
                <h3 class="timestamp-ago" data-timestamp="${created_at}">HÁ</h3>
            </div>
        </div>
        <div class="notification-options">
            <div class="notification-options-view" data-ids='${JSON.stringify({
                id: id,
                user_id: user_id,
                transfer_id: transfer_id
            })}'>
                <i class="fa-solid fa-panorama"></i>
                <h3>Ver</h3>
            </div>
            <div class="notification-options-delete" data-ids='${JSON.stringify({
                    id: id,
                    user_id: user_id,
                    transfer_id: transfer_id
                })}'>
                <i class="fa-solid fa-eraser"></i>
                <h3>Excluir</>
            </div>
        </div>
    </div>
    
    `
}

export default notification;