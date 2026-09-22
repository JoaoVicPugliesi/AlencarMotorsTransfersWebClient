    import button from '../../helpers/button.js';
    import main_input from '../../helpers/main_input.js';

    function transfers () {
        return `
            <div class="transfers">
                <div class="transfers-searchbar">
                    ${main_input('main-searchbar-name', 'Nome do cliente', 100, 'fa-solid fa-magnifying-glass')}
                    <div class="transfers-searchbar-filters">
                        <input placeholder="Placa">
                        <input placeholder="Veículo">
                        <input placeholder="Código">
                        <input placeholder="Status">
                    </div>
                    ${button('transfers-searchbar-command', 'fa-solid fa-magnifying-glass', 'Pesquise', 'blue')}
                </div>
                <div class="transfers-display">
                    <div class="transfer">
                        <div class="transfer-info">
                            <div class="transfer-info-name">
                                <i class="fa-regular fa-id-card"></i>
                                <h3>João Victor Lima Almeida Pugliesi</h3>
                            </div>
                            <div class="transfer-info-plate">
                                <i class="fa-solid fa-certificate"></i>
                                <h3>QLP2668</h3>
                            </div>
                            <div class="transfer-info-vehicle">
                                <i class="fa-solid fa-car"></i>
                                <h3>ONIX</h3>
                            </div>
                            <div class="transfer-info-code">
                                <i class="fa-solid fa-code"></i>
                                <h3>XXXXXX</h3>
                            </div>
                        </div>
                    </div>
                    <div class="transfer">
                        <div class="transfer-info">
                            <div class="transfer-info-name">
                                <i class="fa-regular fa-id-card"></i>
                                <h3>João Victor Lima Almeida Pugliesi</h3>
                            </div>
                            <div class="transfer-info-plate">
                                <i class="fa-solid fa-certificate"></i>
                                <h3>QLP2668</h3>
                            </div>
                            <div class="transfer-info-vehicle">
                                <i class="fa-solid fa-car"></i>
                                <h3>ONIX</h3>
                            </div>
                            <div class="transfer-info-code">
                                <i class="fa-solid fa-code"></i>
                                <h3>XXXXXX</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }

    export default transfers;