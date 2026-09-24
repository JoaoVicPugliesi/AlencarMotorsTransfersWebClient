const configs = {
    transfers: {
        basic: [
            ['transfers-name', 'name', 'fa-regular fa-id-card'],
            ['transfers-plate', 'plate', 'fa-solid fa-certificate'],
            ['transfers-vehicle', 'vehicle', 'fa-solid fa-car'],
            ['transfers-code', 'code', 'fa-solid fa-code']
        ],

        progress: [
            ['tranfers-initial-date', 'initial_date', 'fa-brands fa-angellist', 'Data de início: '],
            ['tranfers-pending-observations', null, 'fa-solid fa-spinner', '2 observações pendentes'],
            ['tranfers-concluded-observations', null, 'fa-solid fa-check', '2 observações concluídas'],
            ['tranfers-final-date', 'final_date', 'fa-solid fa-flag-checkered', 'Data de término: ', '...']
        ],

        term: [
            ['transfers-term-date', 'term_date', 'fa-solid fa-file-contract', 'Prazo: '],
        ],

        buttons: [
            ['transfers-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue'],
            ['transfers-edit', 'fa-solid fa-pen-to-square', 'Editar', 'blue'],
            ['transfers-add-observation', 'fa-solid fa-plus', 'Observação', 'green'],
            ['transfers-conclude', 'fa-solid fa-check-double', 'Concluir', 'green'],
            ['transfers-exclude', 'fa-solid fa-trash', 'Excluir', 'red']
        ]
    },

    observations: {
        basic: [
            ['observations-info-title', 'title', 'fa-solid fa-signature']
        ],

        progress: [
            ['observations-initial-date', 'initial_date', 'fa-brands fa-angellist', 'Data de início: '],
            ['observations-final-date', 'final_date', 'fa-solid fa-flag-checkered', 'Data de término: ', '...']
        ],

        term: [
            ['observations-term-date', 'term_date', 'fa-solid fa-file-contract', 'Prazo: ']
        ],

        buttons: [
            ['observations-comeback', 'fa-solid fa-arrow-left-long', 'Voltar', 'blue'],
            ['observations-edit', 'fa-solid fa-pen-to-square', 'Editar', 'blue'],
            ['observations-conclude', 'fa-solid fa-check-double', 'Concluir', 'green'],
            ['observations-exclude', 'fa-solid fa-trash', 'Excluir', 'red']
        ]
    }

};

export default configs;