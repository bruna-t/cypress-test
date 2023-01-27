describe('ConsultaCep', () => {


  it('CEPvalido', () => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    cy.get('#endereco').type('06454050').blur()
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('contain', 'Alameda')
    cy.get('#btn_nbusca').click()
    cy.get('#btn_pesquisar').should('contain', 'Buscar') 
    cy.screenshot()

  })

  it('CEPinvalido', () => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    cy.get('#endereco').type('00000000').blur()
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    cy.get('#mensagem-resultado').should('contain', 'Não')
    cy.get('#btn_nbusca').click()
    cy.get('#btn_pesquisar').should('contain', 'Buscar')

  })
})

  

 



