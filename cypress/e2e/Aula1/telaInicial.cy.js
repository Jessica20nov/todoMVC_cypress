/**
 * Feature = describe
 * Background = contexto ou beforeEach
 * Caso de teste = it
 */

import telaInicialPage from "../../support/pageObjects/telaInicial.page"

describe('Acessar a página do todoMVC', () => {
  it('Abrir o site', () => {
    cy.visit('https://todomvc.com/examples/react/dist/')
    telaInicialPage.inputText();
  })
})