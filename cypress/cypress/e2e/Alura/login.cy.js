describe('Login Alura', () => {

  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com/#/home')
  })
  it('verifica a mensagem de validação', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
    cy.contains('button', 'Register').click()
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible')

  })

  it('verifica a mensagem de email invalido', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get(':nth-child(1) > .form-control').type('Jaqueline')
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
  })

  it('verifica a mensagem de senha invalida', () => {
    cy.contains('a', 'Register now').click()
    cy.contains('button', 'Register').click()
    cy.get(':nth-child(4) > .form-control').type('123').blur()
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')


  })
})