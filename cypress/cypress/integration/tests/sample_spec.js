describe('My First Test', function() {
  it('Visits the Kitchen Sink', function() {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
