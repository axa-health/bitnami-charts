const COMMAND_DELAY = 2000;

for (const command of ['click']) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(origVal);
      }, COMMAND_DELAY);
    });
  });
}

Cypress.Commands.add(
  'login',
  (username = Cypress.env('username'), password = Cypress.env('password')) => {
    cy.visit('/');
    cy.get('[type="email"]').should('be.enabled').type(username);
    cy.get('[type="password"]').should('be.enabled').type(password);
    cy.contains('button', 'sign in').click();
    cy.contains('WORKSPACES').should('be.visible');
  }
);
