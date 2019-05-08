describe('Comments API', () => {  
  it('loads all comments from a particular post successfully', () => {
    cy.request('/comments?postId=1')
      .then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(5);
      });
  });

  it('loads the same amount of response as the posts nested resource', () => {
    cy.request('/posts/1/comments')
      .then(response => {
        // This assertion is failing because /posts/1/comments returns all the comments from other posts.
        expect(response.body.length).to.equal(5);
      });
  });
});