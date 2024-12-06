import telaInicialPage from "../../support/pageObjects/telaInicial.page"

describe('Regressivo ToDo App', () => {
    context('Validar a tela inicial', () => {
        beforeEach(() => {
            cy.visit('/');
    });

    it('Validar a area label do input de dados', () => {
       telaInicialPage.validarInput("What needs to be done?");
    });
});

        context('Validar adição de itens', () => {
            beforeEach(() => {
                cy.visit('/');
            });

            it('Adicionar mais de um item na lista', () => {
                var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];
            
                todoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item);
                });

            //Validar que o contador é igual a 4
            telaInicialPage.validarContador("4 items left!");
            });
        }); 
    });

        context('Validar a conclusão de itens', () => {
            describe('Concluir itens na lista de todo', () => {
                beforeEach(() => {
                cy.visit('/')
                var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];
            
                todoItens.forEach(function(item, indice, array){
                    telaInicialPage.inputText(item);
                })
                })
            
            it('Concluir um item da lista de toDo', () => {
                telaInicialPage.concluirItem();
                telaInicialPage.validarContador("3 items left!");
                //telaInicialPage.validarSizeToDo("3 items left!")
                });
        });
    });

        context('Validar a filtragem de itens', () => {
            describe('Concluir itens na lista de todo', () => {
                beforeEach(() => {
                cy.visit('/')
                var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];
            
                todoItens.forEach(function(item, indice, array){
                    telaInicialPage.inputText(item);
                })
                    telaInicialPage.concluirItem();
                })

                it('Validar a lista de itens ativos', () => {
                    telaInicialPage.filtrarItem("Active");
                    telaInicialPage.validarContador("3 items left!");
                })

                it('Validar a lista de itens concluídos', () => {
                    telaInicialPage.filtrarItem("Completed");
                    telaInicialPage.validarContador("3 items left!");
                    //telaInicialPage.validarSizeToDo(3); Se fosse número poderia ser assim
                })
        });
    

    context('Validar a exclusão de itens', () => {
        beforeEach(() => {
            cy.visit('/')
            var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];
        
            todoItens.forEach(function(item, indice, array){
                telaInicialPage.inputText(item);
            })
        })

        it('Excluir um item da lista', () => {
            telaInicialPage.deletarItem();
            telaInicialPage.validarContador("3 items left!");
        });
    });
});