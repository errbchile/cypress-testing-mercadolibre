describe('Abrir mercadolibre', () => {

  it('Que se pueda abrir la pagina de mercadolibre', () => {
    cy.visit('https://www.mercadolibre.cl')

    cy.get('[placeholder="Buscar productos, marcas y más…"]').type('computadora')

    cy.get('[type="submit"]').click()

    cy.url().should('include', 'computadora')
    
  })

})