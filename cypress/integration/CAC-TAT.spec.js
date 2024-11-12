/// <reference types="Cypress" />


describe('Teste form Fale Conosco', function() {
  
  it.only('visita pagina e testa title', function() {  
    
    
    cy.visit('../src/index.html')
    // cy.visit('http://localhost:3000/dev/hellmannsCelebrar2024/duvidas')


    cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")

  })

  it('preenche os campos obrigatórios e envia o formulário', function() {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare ante id eleifend maximus. Quisque rhoncus rutrum augue ac congue. Sed et nisi hendrerit, lobortis nulla quis, dapibus sapien. Nam dapibus lectus sit amet libero commodo gravida.'

    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Martelo')
    cy.get('#email').type('smarteloedu@gmail.com')
    cy.get('#phone').type('11910702169')
    cy.get('#open-text-area').type(longText, { delay: 0 }) // diminui o tempo do texto
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
    
  })

  it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
    cy.get('#phone')
      .type('abc')
      .should('have.value', '')
  })

  it('exibe mensagem de erro ao sumeter o formulário com um e-mail com formatação inválida', function() {
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Martelo')
    cy.get('#email').type('smarteloedu@g')
    cy.get('#phone').type('11910702169')
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
    cy.get('#firstName').type('Eduardo')
    cy.get('#lastName').type('Martelo')
    cy.get('#email').type('smarteloedu@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type('teste')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
    cy.get('#firstName')
      .type('Eduardo')
      .should('have.value', 'Eduardo')
      .clear()
      .should('have.value', '')

    cy.get('#lastName')
      .type('Martelo')
      .should('have.value', 'Martelo')
      .clear()
      .should('have.value', '')

    cy.get('#email')
      .type('smarteloedu@gmail.com')
      .should('have.value', 'smarteloedu@gmail.com')
      .clear()
      .should('have.value', '')

    cy.get('#phone')
      .type('11910702169')
      .should('have.value', '11910702169')
      .clear()
      .should('have.value', '')

    cy.get('#open-text-area')
      .type('teste')
      .should('have.value', 'teste')
      .clear()
      .should('have.value', '')
  })

  it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
    cy.get('.button[type="submit').click()

    cy.get('.error').should('be.visible')
  })
})