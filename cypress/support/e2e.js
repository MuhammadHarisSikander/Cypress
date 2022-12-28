import './commands'
import "cypress-localstorage-commands";
import '@shelex/cypress-allure-plugin';
import registerCypressGrep from '@cypress/grep'
registerCypressGrep()
require('@shelex/cypress-allure-plugin');
require('cypress-grep')()
require('cypress-xpath');
import 'cypress-if'
// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

// Alternatively you can use CommonJS syntax:
// require('./commands')
beforeEach(function () {
    console.log('Hekkkk');
    let testSuite = Cypress.env('SUITE');
    if (!testSuite) {
        return;
    }

    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testSuite = "<" + testSuite + ">"
    if (!testName.includes(testSuite)) {
        console.log('Hekkkk');
        this.skip();
    }
})