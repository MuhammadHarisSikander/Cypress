/// <reference types="Cypress" />
// import Logout from '../pageObject/logout'



describe("Logout scenario", () => {

    // beforeEach(() => {
    // .session.getCurrentSessionData()
    // cy.fixture('creds').then(function (creds) {
    //     this.creds = creds
    //     cy.login(creds.email, creds.password)
    // })
    // })
    it('Logout case', () => {

        // cy.mRestoreLocalStorage().then(() => {
        // console.log('>>>>>>>>>>>>>>>>>>', cy.mRestoreLocalStorage());
        cy.session('s1')
        cy.visit('https://qa.franchisor.gymhub.com/dashboard');


        // cy.getLocalStorage()
        // cy.visit('https://qa.franchisor.gymhub.com/dashboard');
        // console.log('.......', cy.session());
        // Cypress.session.getSession(id)
        // Cypress.session.getCurrentSessionData()
        // cy.visit('https://qa.franchisor.gymhub.com/dashboard');
        // cy.wait(2000)
        // const logout = new Logout()
        // logout.TapOnProfile().click()
        // logout.ClickOnChangePass().click()
        // cy.get('.mat-snack-bar-container').should('have.value', 'Either email/password is incorrect')
    })
    // it('Logout case', () => {
    //     cy.visit('https://qa.franchisor.gymhub.com/');

    //     const logout = new Logout()
    //     logout.TapOnProfile().click()
    //     logout.ClickOnChangePass().click()
    //     // cy.get('.mat-snack-bar-container').should('have.value', 'Either email/password is incorrect')
    // })
})



