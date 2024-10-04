const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: [
        "cypress/e2e/2-advanced-examples/*.cy.js",
      ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
