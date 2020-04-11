/// <reference types="Cypress" />

describe('Redis', () => {
  it('should be enabled on article pages', () => {
    cy.request(Cypress.env('TEST_ARTICLE')).then((res) => {
      expect(res.headers['x-generated-by']).to.contain('nu-sun-helios');
      expect(res.headers['x-rendered-from']).to.contain('redis');
    });
  });
});
