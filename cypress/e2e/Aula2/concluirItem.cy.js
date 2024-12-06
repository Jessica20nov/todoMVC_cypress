//import { describe } from "mocha"
import telaInicialPage from "../../support/pageObjects/telaInicial.page"

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
    });
  });

