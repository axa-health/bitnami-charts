/// <reference types="cypress" />
import {
  random,
} from '../support/utils';

it('allows to use the API Explorer', () => {
  cy.login();
  // Go to the secrets page
  cy.get('button[class*="nav-console"]').click();
  // Create a secret
  cy.fixture('operation').then((op) => {
    cy.get('input').type(`${op.operation.command}{enter}`);
    cy.get('pre').contains(`${op.operation.expectedOutput}`).should('be.visible');
  });
});
