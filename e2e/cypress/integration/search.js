describe('searching for a book', () => {
  specify('a user gets redirected to the search path', () => {
    cy.visit("/")
      .get('input')
      .type('Dracula')
      .get('button')
      .click()
      .assertRoute('/search')
  })

  specify('a user does not see books results for an empty search', () => {
    cy.visit("/")
      .get('button')
      .click()
    cy.get('.ui.grid').should('not.contain', '.cards')
  })
});
