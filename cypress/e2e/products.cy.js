// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('Product list feature is Disabled').should('be.visible')
    cy.contains('Enable').should('be.visible')
  })

  it('can enable feature', () => {
    cy.visit('/')
    cy.intercept('GET', 'https://fakestoreapi.com/products').as('fetchProducts')
    cy.get('div').contains('Enable').click()
    cy.wait('@fetchProducts').then((intercept) => {
      const item = intercept.response.body[0]
      cy.get('div').contains(item.price).should('be.visible')
    })
  })

  it('can go to product details page', () => {
    cy.visit('/')
    cy.intercept('GET', 'https://fakestoreapi.com/products').as('fetchProducts')

    cy.intercept('GET', 'https://fakestoreapi.com/products/1', (req) => {
      req.reply({
        statusCode: 200, // default
        fixture: 'product.json'
      })
    })

    cy.get('div').contains('Enable').click()
    cy.wait('@fetchProducts').then((intercept) => {
      const item = intercept.response.body[0]
      cy.get('div').contains(item.price).should('be.visible')

      cy.get('div').contains(item.price).click()
      cy.contains(item.title).should('be.visible')
      cy.contains(item.description).should('be.visible')
      cy.contains(item.price).should('be.visible')
    })
  })
})
