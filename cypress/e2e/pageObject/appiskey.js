/// <reference types="Cypress" /> 
class Login {
    getEmail() {
        return cy.get('.mat-form-field.ng-tns-c27-4 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
    getPassword() {
        return cy.get('.mat-form-field.ng-tns-c27-5 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
    }
    getSubmit() {
        return cy.get('.submit-button')
    }
}
export default Login