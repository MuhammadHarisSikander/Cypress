/// <reference types="Cypress" /> 
class Login {
    getEmail() {
        return cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input')
    }
    getPassword() {
        return cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
    }
    getSubmit() {
        return cy.get('.MuiButton-label')
    }
}
export default Login