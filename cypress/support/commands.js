import Login from '../e2e/pageObject/appiskey'
let LOCAL_STORAGE_MEMORY = {};
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
    cy.session('s1', () => {
        cy.visit('https://qa.franchisor.gymhub.com/');
        cy.wait(2000)
        cy.get('.mat-form-field.ng-tns-c27-4 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(username)
        cy.wait(2000)
        cy.get('.mat-form-field.ng-tns-c27-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(password)
        cy.wait(2000)
        cy.get('.submit-button').click().then(() => {
            cy.mSaveLocalStorage();
        })
        // cy.wait(5000)
        cy.url().should('contain', '/dashboard')
    })
})





// Cypress.Commands.add("mSaveLocalStorage", () => {
//     Object.keys(localStorage).forEach((key) => {
//         LOCAL_STORAGE_MEMORY[key] = localStorage[key];
//     });
// });

// Cypress.Commands.add("mRestoreLocalStorage", () => {
//     Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
//         localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
//     });
// });