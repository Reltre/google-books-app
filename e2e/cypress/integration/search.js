describe('searching for a book with a valid query', () => {
  specify('a user gets redirected to the search path', () => {
    cy.visit("/")
      .get('input')
      .type('Dracula')
      .get('button')
      .click()
      .assertRoute('/search')
  })

  specify('a user sees results', () => {
    cy.visit("/")
      .get('input')
      .type('Dracula')
      .get('button')
      .click()
    cy.get('.ui.cards').should('be.visible')
  })
});

describe('searching for a book without a query', () => {
  specify('a user does not see books results', () => {
    cy.visit("/")
      .get('button')
      .click()
    cy.get('.ui.grid').should('not.contain', '.cards')
  })
});
