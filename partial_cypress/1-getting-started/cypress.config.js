const { defineConfig } = require("cypress");
const { configureAllureAdapterPlugins } = require("@mmisty/cypress-allure-adapter/plugins");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  // reporterOptions: {
  //   reportDir:'cypress/report',
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  //   debug: true
  // },
  "reporterOptions": {
    "reportDir": "cypress/reports",
    "overwrite": false,
    "html": false,
    "json": true,
    "timestamp":"mmddyyyy_HHMMss"
  },
  e2e: {
    specPattern: [
      "cypress/e2e/1-getting-started/*.cy.js"
    ],
    env: {
			allure: 'false',
			allureCleanResults: 'false',
			// allureAddVideoOnPass: true,
			// allureAttachRequests: true,
			// allureCompactAttachments: 'false',
			allureResults: '../../allure-results', // for test results to write
			// allureSkipCommands: '', // separated comma
			// allureShowDuplicateWarn: 'true',
			// allureShowTagsInTitle: false,
			// allureAddNonSpecialTags: 'true',
		  },
    setupNodeEvents(on, config) {
    // require('cypress-mochawesome-reporter/plugin')(on);
    // return config;
    configureAllureAdapterPlugins(on, config);
      
    return config;
    },
  },
});
