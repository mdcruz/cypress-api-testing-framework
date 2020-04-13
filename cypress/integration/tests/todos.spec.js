/// <reference types="cypress" />

describe('Todo API', () => {
  it('returns a JSON data', () => {
    cy.request('/todos')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
  });

  it('has the correct status code', () => {
    cy.request('/todos').its('status').should('be.equal', 200);
  });

  it('loads all the todos from a specific user ID', () => {
    cy.request('/todos/?userId=1').then((res) => {
      res.body.forEach((item) => expect(item.userId).to.equal(1));
    });
  });

  it('marks todo item as completed', () => {
    cy.request('PATCH', '/todos/1', { completed: true })
      .its('body')
      .its('completed')
      .should('be.equal', true);
  });

  it('marks todo item as completed - different way', () => {
    cy.request({
      method: 'PATCH',
      url: '/todos/1',
      body: {
        completed: true,
      },
    })
      .its('body')
      .its('completed')
      .should('be.equal', true);
  });
});
