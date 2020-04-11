# Cypress API test framework

This is an example repo on how to use `Cypress` to run API integration tests against http://jsonplaceholder.typicode.com/

## Libraries and plugins used

- [Cypress](https://www.cypress.io/)
- [cy-api](https://github.com/bahmutov/cy-api) plugin

## Dependencies

To run the tests, please ensure you have the following installed:

- Node
- NPM

## Why use Cypress

- No other dependencies required to run tests as Cypress contains everything you need.
- Setup is minimal
- Cypress supports BDD and TDD style assertion syntax so this would already be familiar to engineers who have used other JavaScript testing libraries.
- Cypress Test Runner useful in debugging your tests. You can also directly inspect from Chrome dev tools.

## How to run

Clone the repo and Install the project dependencies
`npm i`

To run the tests on your terminal, run
`npm run cy:test`

To run the tests against the Cypress Test Runner, run
`npm run cypress open`

Once the test runner has loaded, click on the spec file you wish to test.
