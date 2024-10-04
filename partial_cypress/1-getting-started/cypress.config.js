const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir:'cypress/report',
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    debug: true
  },
  e2e: {
    specPattern: [
      "cypress/e2e/1-getting-started/*.cy.js"
    ],
    setupNodeEvents(on, config) {
    require('cypress-mochawesome-reporter/plugin')(on);
    return config;
    },
  },
});
