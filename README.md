## Look Books

A book viewer app that lets you look up books through the Google Books API.

### Initial Setup

Make sure to install the necessary dependencies if you're going to run this locally on your machine: `yarn install`.

If you don't have `yarn` installed, you can add it to your machine with `npm install -g yarn`.

### Starting the app locally

If running locally, use `yarn start-dev` to start the server for this application. This will run the TypeScript index file using `ts-node`. Then in your browser, navigate to `http://localhost:8080`.

### Testing

Some tests have been added both locally and in the cloud. 


#### Unit and Controller Tests

If you wish to run unit and controller tests locally on your machine, use the command:

`yarn test`, to run unit and controller tests.

#### Integration/E2E Tests

To run integration tests locally:

First use the command `cd e2e` from the top level of this project directory to jump into
the "e2e" directory.

Then, if you haven't done so already, install dependencies for e2e testing using `yarn install`

Next start the application server with `yarn start`. This is necessary so that cypress has an application running to test against.

After that, use the command `yarn cypress:run` to run all integration tests in the terminal.

If you wish to run individual test files, then I recommend using `yarn cypress:open` instead.
This command will launch a GUI that lets us run individual files and see those tests plays out in a simulated browser.

### Try it Out

You're welcome to try this application out as well. It can be accessed at this address: https://look-books.herokuapp.com/.
It should work both on mobile and on a normal computer.