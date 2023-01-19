import Login from '../e2e/pageObject/login'
import creds from '../fixtures/creds.json'
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



Cypress.Commands.add('Login', (username, pass) => {
    let email= username
    let password = pass

    if(email == undefined && pass == undefined){
        email = creds.email
        password = creds.password
    }
    const login = new Login()
    cy.visit('/');
    login.getEmail().type(email)
    login.getPassword().type(password)
    login.getSubmit().click()

})



