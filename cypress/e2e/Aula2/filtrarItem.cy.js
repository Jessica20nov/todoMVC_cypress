import telaInicialPage from "../../support/pageObjects/telaInicial.page"

describe('Validar os filtros da aplicação após adição de itens', () => {
  beforeEach(() => {
    cy.visit('/')
    var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];

    todoItens.forEach(function(item, indice, array){
      telaInicialPage.inputText(item);
  })
        telaInicialPage.concluirItem();
  })

it('Filtrar itens ativos', () => {
    telaInicialPage.filtrarItem("Active");
    });


it('Filtrar itens concluídos', () => {
    telaInicialPage.filtrarItem("Completed");
});
});