function notification (id, description, is_viewed, timestamp) {
    return `
    <div class="notification ${is_viewed ? 'viewed' : 'pendent'}">
        <div class="notification-description">
            <p>${description}</p>
        </div>
        <div class="notification-info">
            <div class="notification-info-isviewed">
                <h3>${is_viewed ? 'LIDA' : 'NÃO LIDA'}</h3>
            </div>
            <div>
                <h3 class="notification-info-timestamp" data-timestamp="${timestamp}">HÁ ${timestamp}</h3>
            </div>
        </div>
        <div class="notification-options">
            <div class="notification-options-view" data-id="${id}">
                <i class="fa-solid fa-panorama"></i>
                <h3>Ver</h3>
            </div>
            <div class="notification-options-delete" data-id="${id}">
                <i class="fa-solid fa-eraser"></i>
                <h3>Excluir</>
            </div>
        </div>
    </div>
    
    `
}

export default notification;