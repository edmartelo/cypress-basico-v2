/// <reference types="Cypress" />


describe('Teste form Fale Conosco', function() {
  it('Desativa cookies e scroll automatico', function() {  
    // cy.visit('../src/index.html')
    cy.visit('http://localhost:3000/dev/hellmannsCelebrar2024/duvidas')


    cy.title().should('be.equal', "Promoção Celebrar com Hellmann's é Tudo de Bom")

    cy.get('.btn-cookies-unilever').click()

    cy.scrollTo(0, 500)

  })

  it('preenche os campos obrigatórios e envia o formulário', function() {


    cy.get('#aten_nome').type('bot Eduardo Martelo', { force: true })

    cy.get('#aten_email').type('-bot-eduardo.martelo@encinterativa.com.br', { force: true })

    cy.get('#aten_mensagem').type('teste bot')
    cy.get('.success').should('be.visible')


    // cy.get('button[type="submit"]').click()
  })
})