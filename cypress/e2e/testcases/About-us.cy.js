/// <reference types="Cypress" />
const dimensions = require("../dimensions.js")

beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false
    })
})

describe("Verify that user can visit the website and clicks on the lets connect", () => {
  Object.values(dimensions).map((key, i) => {

    it("Scrolling", () => {
        cy.viewport(key.viewportWidth, key.viewportHeight)
        cy.visit('https://qa.appiskey.com/');

      cy.contains('About Us').click({force: true, multiple: true});                            //click on about us
      cy.get('.banner > .container > .row').focus;
      cy.contains("Get Started").click({force: true, multiple: true});                           //click on get started
      cy.get("#form-section").scrollIntoView();
      cy.wait(3000);
      cy.get('.banner > .container > .row').scrollIntoView();
      cy.contains('Lets Connect').click                          //click on Lets connect
      cy.wait(3000);
      cy.get("#form-section").scrollIntoView();
      cy.wait(3000);
      cy.get('.about-us-cta').scrollIntoView();
      cy.wait(3000);
      cy.contains("Schedule a Meeting").click;                  //schedule an appointement
      cy.get("#form-section").scrollIntoView();
      cy.wait(3000);
      })



    
  })
      

})