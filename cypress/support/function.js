//command to url
Cypress.Commands.add('checkURL', (web) => {
    const website = web;
    cy.visit(`${website}`);
  });