const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// import allureWriter from "@shelex/cypress-allure-plugin/writer";


module.exports = defineConfig({

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      require('@cypress/grep/src/plugin')(config);
      // Cypress.config('pageLoadTimeout', 60000)
      return config;
    },
    experimentalSessionAndOrigin: true,
    excludeSpecPattern: process.env.CI ? 'cypress/e2e/all.cy.js' : [],
    env: {
      experimentalSessionAndOrigin: true,
      // allureReuseAfterSpec: true,
    },
    baseUrl: "https://qa.appiskey.com/"
  },
});

