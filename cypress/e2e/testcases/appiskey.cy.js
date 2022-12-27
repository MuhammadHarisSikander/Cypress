/// <reference types="Cypress" />
const dimensions = require("../dimensions.js")


beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

describe("Visit Appiskey website and test Responsive testing", () => {

    Object.values(dimensions).map((key, i) => {

        it("Scrolling", () => {
            cy.viewport(key.viewportWidth, key.viewportHeight)
            cy.visit('https://qa.appiskey.com/');
            cy.scrollTo('bottom', { ensureScrollable: false })
            cy.scrollTo("top", { duration: 3000 })
        })

    })

    it("Visit pages", () => {
        cy.visit('https://qa.appiskey.com/');
        cy.contains('About Us').click()
        cy.contains('Services').click()
        cy.contains('Case Studies').click()
        cy.contains('Blog').click()
    })


    // it('Login Positive case', () => {
    //     cy.visit('https://qa.franchisor.gymhub.com/Dashboard');
    //     // login.getEmail().type('hassan.gym@yopmail.com')
    //     // login.getPassword().type('Admin@123')
    //     // login.getSubmit().click()
    //     // // cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.value', "Either email/password is incorrect")
    //     // cy.wait(1000)

    // })

    // beforeEach(() => {

    // })
    // it('Login Positive case', () => {
    //     cy.fixture('creds').then(function (creds) {
    //         this.creds = creds
    //         cy.login(creds.email, creds.password)
    //     })
    // const login = new Login()
    // cy.visit('https://qa.franchisor.gymhub.com/');
    // login.getEmail().type('hassan.gym@yopmail.com')
    // login.getPassword().type('Admin@123')
    // login.getSubmit().click()
    // cy.get('.mat-simple-snackbar > :nth-child(1)').should('have.value', "Either email/password is incorrect")
    //     cy.wait(1000)
    // })
    // it('Login Negative case', () => {
    //     const login = new Login()
    //     cy.visit('https://qa.franchisor.gymhub.com/');
    //     login.getEmail().type('hassan.gym@yopmail.com')
    //     login.getPassword().type('Admin@13')
    //     login.getSubmit().click()
    // })

})








