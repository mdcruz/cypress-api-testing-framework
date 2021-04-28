/// <reference types="cypress" />

describe('Users API', () => {
  it('returns a JSON data', () => {
    cy.request('/users')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('return the correct status code', () => {});

  it('should return the correct number of users', () => {});
});
