// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import '@testing-library/cypress/add-commands';

// https://www.cypress.io/blog/2020/02/12/working-with-iframes-in-cypress/
Cypress.Commands.add('getIframeBody', () => {
  cy.log('getIframeBody');

  return cy
      .get('#storybook-preview-iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then((body) => cy.wrap(body))
});