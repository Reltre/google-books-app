describe('navigating to a non-existent page', () => {
  specify('a user sees an info message telling them the page does not exist', () => {
    cy.visit("/blah", { failOnStatusCode: false })
    cy.get('.message .header').should('contain', "That page doesn't exist.")
  })

  specify('a user can close an info message', () => {
    cy.visit("/blah", { failOnStatusCode: false })
      .get('.close')
      .click()

    cy.get('body').should('not.contain', "That page doesn't exist.")
  })
})