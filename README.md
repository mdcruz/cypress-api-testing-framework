# API test framework
This is an example repo on how to use `Cypress` to run API integration tests against http://jsonplaceholder.typicode.com/

## Libraries used
- Cypress

## Dependencies
To run the tests, please ensure you have the following installed:
- Node
- NPM

## Why use Cypress?
- No other dependencies required to run tests as Cypress contains everything you need. 
- Setup is minimal
- Cypress supports BDD and TDD style assertion syntax so this would already be familiar to engineers who have used other JavaScript testing libraries.
- Cypress Test Runner useful in debugging your tests. You can also directly inspect from Chrome dev tools.

## How to run
Clone the repo and Install the project dependencies
```
npm i
```

To run the tests on your terminal, use the following commands:
```
npm run cypress run
``` 
or 
```
npx cypress run
```

To run the tests against the Test Runner, use 

```
npm run cypress open
``` 
Once the test runner has loaded, click on the spec file you wish to test.

## Additional notes on JSONPlaceholder API
- Since this is just a fake API, any changes made to the data will not persist. There are a couple of tests where the assertions are failing but this is expected. Creating your own fake server using JSON Server is an option that you can use if you want to verify that the `DELETE`, `POST` endpoints are modifying the data correctly.
- The API requests should return the correct status codes. There is 1 test where I was expecting the status code to be 404 because the resource has been deleted but it returned 200 instead.
- Some resources could do with better naming. For example, going to `/posts`, the `userId` property should really be named `postId`. This is the same case for `albums` where the ID is named as `userId` instead of `albumId`.
- Since some of the resources can be connected to each other, it would be better if there are links to what additional actions a user can do on a resource. This way, users will not have to guess what other resource action they can do. For example, post has many comments. If you go to `/posts/1`, you'll see the following result:

```
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
```
From the above, you won't know how to view the comments unless you go the the API documentation directly. It would have been better if we have the following structure instead:

```
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  "links": [
    {
      "href": "https://jsonplaceholder.typicode.com/comments?postId=1"
      "rel": "comments"
      "type": "GET"
    }
  ]
}
```

