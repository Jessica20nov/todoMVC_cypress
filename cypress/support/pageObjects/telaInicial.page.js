/**
 * Vai ser uma classe
 * Manipulação de dados
 */
const elem = require('../elements/telaInicial.elements').ELEMENTS;
const concluirItem = require('../elements/telaInicial.elements').ITENS;
const filtroItem = require('../elements/telaInicial.elements').FILTROS;

class telaInicial {
    inputText(dado) {
        cy.get(elem.inputToDo).type(dado).type('{enter}');
    }

    concluirItem() {
        cy.get(concluirItem.buttonConcluir).last().click();
        //Tem first e last, para pegar o primeiro e o último item da lista
    }

    filtrarItem(menu) {
        cy.get(filtroItem.filtroToDo)
        .contains(menu).and('be.visible').click();
    }

    deletarItem(){
        cy.get(concluirItem.listaItens)
        .first() //pegar a primeira div
        .find('button')
        .invoke('show') //para mostrar o botão que só aparece quando o mouse passa em cima
        .click();
    }

    validarInput(texto){
        cy.get(elem.inputToDo)
        .should('have.attr', 'placeholder')
        .and('include', texto);
    }

    validarContador(numero) {
        cy.get(filtroItem.contador)
        .should('have.text', numero); //ou .contains(numero)
    }

    validarSizeToDo(numero){
        cy.get(concluirItem.validarListaItens)
        .should('have.length', numero);
    }
}

export default new telaInicial(); // Exporta uma nova instância da classe telaInicial