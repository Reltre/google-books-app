describe('searching for a book', () => {
  specify('a user gets redirected to the search path', () => {
    cy.visit("/")
      .get('input')
      .type('Dracula')
      .get('button')
      .click()
      .assertRoute('/search')
  })
});
