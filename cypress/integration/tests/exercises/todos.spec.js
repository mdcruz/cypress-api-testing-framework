/// <reference types="cypress" />

describe('Todo API', () => {
  it('returns a JSON data', () => {
    cy.request('/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('has the correct status code', () => {});

  it('loads all the todos from a specific user ID', () => {});

  it('marks todo item as completed', () => {});
});
