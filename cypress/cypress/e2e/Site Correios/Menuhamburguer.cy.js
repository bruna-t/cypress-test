describe('Menuhamburguer', () => {
  it('Buscar por Cep ou endereço ', () => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
    cy.get('.hamburger').click()
    cy.get('[href="https://buscacepinter.correios.com.br/app/cep/index.php"]').click()
    cy.get('#cep').type('06454050').blur()
    cy.get('#btn_pesquisar').click()
    cy.get('#navegacao-total').should('contain','a')

  })


    it('Buscar por logradouro por Bairro', () => {
      cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
      cy.get('.hamburger').click()
      cy.get('[href="https://buscacepinter.correios.com.br/app/logradouro_bairro/index.php"]').click()
      cy.get('.controle > #uf').select('SP')
      cy.get('#ajuda_localidade > #localidade').type('Barueri').blur()
      cy.get('#bairro').type('Alphaville').blur()
      cy.get('#btn_pesquisar').click()
      cy.get('#mensagem-resultado > h3').should('contain','Resultado')
      cy.get('.proximo').click()
      cy.get('.anterior').click()



  })
})
