/// <reference types="Cypress" />
import Login from '../pageObject/login'

describe("LOGIN", () => {
    it('Lgin with valid creds', () => {
        const login = new Login()
        cy.visit('https://qa-backoffice.petplannersoftware.com');
        login.getEmail().type('stage.admin@petplannersoftware.com')
        login.getPassword().type('gCLoU9LU')
        login.getSubmit().click()
    })

})

