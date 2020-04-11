/// <reference types="cypress" />

describe('Users API', () => {
  beforeEach(() => cy.request('/users').as('users'));

  it('return the correct status code', () => {
    cy.get('@users').then((res) => expect(res.status).to.equal(200));
  });

  it('should return the correct number of users', () => {
    cy.get('@users').then((res) => expect(res.body.length).to.equal(10));
  });
});
