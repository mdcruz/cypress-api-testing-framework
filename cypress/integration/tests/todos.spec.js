/// <reference types="cypress" />

describe('Todo API', () => {
  it('returns a JSON data', () => {
    cy.request('/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });
});
