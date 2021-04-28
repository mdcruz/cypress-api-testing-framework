/// <reference types="cypress" />

describe('Post API', () => {
  it('loads all the posts successfully', () => {
    cy.api({ url: '/posts' }).then((res) => {
      expect(res.status).to.equal(200);
      expect(res.body.length).to.equal(100);
    });
  });

  it('loads the correct amount of posts per user', () => {
    cy.api({ url: '/posts?userId=1' }).its('body').should('have.length', 10);
  });

  it('should add a new post successfully', () => {
    cy.api({
      method: 'POST',
      url: '/posts?userId=1',
      body: {
        userId: 1,
        title: 'foo',
        body: 'var',
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.id).to.equal(101);
    });
  });

  it('should delete a post successfully', () => {
    cy.api({ method: 'DELETE', url: '/posts/1' })
      .its('status')
      .should('be.equal', 200);
  });
});
