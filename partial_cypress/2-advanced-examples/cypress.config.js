const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");


module.exports = defineConfig({
  // reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir:'cypress/report',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  //   debug: true
  // },
  e2e: {
    specPattern: [
      "cypress/e2e/2-advanced-examples/*.cy.js"
    ],
    setupNodeEvents(on, config) {
    // require('cypress-mochawesome-reporter/plugin')(on);
    // return config;
    configureAllureAdapterPlugins(on, config);
      
    return config;
    },
  },
});
