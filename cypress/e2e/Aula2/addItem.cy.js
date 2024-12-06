//import { describe } from "mocha"
import telaInicialPage from "../../support/pageObjects/telaInicial.page"

/**
 * DADO - BEFORE - SE TIVER SOMENTE 1 TESTE, 1 IT, roda antes do teste
 * BEFORE EACH - RODA ANTES DE CADA TESTE
 */

describe('Adicionar itens na minha lista de todo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

it('Adicionar um item na lista', () => {
        telaInicialPage.inputText("dado1");
        //Pode ser adicionado assim também, porém é duplicidade de código. O melhor é o modo abaixo do array.
        //telaInicialPage.inputText("dado2");
})

it('Adicionar mais de um item na lista', () => {
    var todoItens = ["Maça", "Banana", "Cenoura", "Tomate"];

    todoItens.forEach(function(item, indice, array){
      telaInicialPage.inputText(item);
    });
  });

})