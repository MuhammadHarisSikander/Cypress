const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({
  projectId: 'jpinb7',

  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
    experimentalSessionAndOrigin: true,
    env: {
      // allureReuseAfterSpec: true,
    },
    baseUrl: 'https://qa.appiskey.com/',
    // "chromeWebSecurity": false
  },
});

