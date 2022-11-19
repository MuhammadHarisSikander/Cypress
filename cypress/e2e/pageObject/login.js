/// <reference types="Cypress" /> 
class Login {
    getEmail() {
        return cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    getPassword() {
        return cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    getSubmit() {
        return cy.get('.oxd-button')
    }
}
export default Login