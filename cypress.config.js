const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

// import allureWriter from "@shelex/cypress-allure-plugin/writer";


module.exports = defineConfig({
  projectId: '5ut2v7',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-grep/src/plugin')(config)
      allureWriter(on, config);
      return config;
    },
    env: {
      allureReuseAfterSpec: true,
      ensureScrollable: false,
    },
    // experimentalSourceRewriting:true,
    viewportWidth: 1536,
    viewportHeight: 960
  },
  // "chromeWebSecurity": false
});

