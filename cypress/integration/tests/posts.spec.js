describe('Post API', () => {  
  it('loads all posts successfully', () => {
    cy.request('/posts')
      .then(response => {
        expect(response.status).to.equal(200);
        expect(response.body.length).to.equal(100);
      });
  });

  it('loads the correct amount of posts per user', () => {
    cy.request('/posts?userId=1')
      .then(response => {
        expect(response.body.length).to.equal(10);
      });
  });

  it('should add a new post successfully', () => {
    cy.request('POST', '/posts?userId=1', {
      userId: 1,
      title: 'foo',
      body: 'var',
    }).then(response => {
      expect(response.status).to.equal(201);
      expect(response.body.id).to.equal(101);
      expect(response.body.title).to.equal('foo');
    });

    cy.request('/posts?userId=1')
      .then(response => {
        // This assertion will fail because the data does not persist on the fake db.
        expect(response.body.length).to.equal(11);
      });
  });

  it('should delete a post successfully', () => {
    cy.request('DELETE', '/posts/1')
      .then(response => {
        // This assertion will fail because the response returned is 200.
        // If a resource has been deleted, it should return the correct status code which is 404.
        expect(response.status).to.equal(404);
      });

    cy.request('/posts/1')
      .then(response => {
        // This assertion will fail because the original data still persists on the fake db.
        expect(response.body).to.be.null;
      });
  });
});