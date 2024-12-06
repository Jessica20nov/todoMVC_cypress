import telaInicialPage from "../../support/pageObjects/telaInicial.page"

describe('Deletar itens da lista', () => {
  beforeEach(() => {
    cy.visit('/')
    var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];

    todoItens.forEach(function(item, indice, array){
      telaInicialPage.inputText(item);
  })
  })

it('Excusão de um item da lista', () => {
    telaInicialPage.deletarItem();
    });

});