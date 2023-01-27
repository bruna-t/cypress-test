
describe('Teste site dos corrios', () => {

  beforeEach(() => {
    cy.visit('https://buscacepinter.correios.com.br/app/endereco/index.php')
  })
  
  it('Buscar CEP Sucesso', () => {
    cy.get('#endereco').type('06454050').blur()
    cy.get('#tipoCEP').select('Localidade/Logradouro')
    cy.get('#btn_pesquisar').click()

    cy.get('tbody > tr > [data-th="Logradouro/Nome"]').should('contain', 'Alameda')

  })

  
})

  