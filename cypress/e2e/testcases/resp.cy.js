//<reference types="Cypress" />

const { iphoneX } = require("../dimensions");
const dimensions = require("../dimensions");



describe("to check the responsiveness on diffrent devices", () => {
        
      it("check for iphonex", () => {
        iphoneX();
        cy.visit('https://qa.appiskey.com/');
        cy.contains('Lets Connect').click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
        cy.scrollTo("top", { duration: 800 });                     

        cy.wait(3000);
        cy.contains('Schedule an Appointment ').click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
        cy.scrollTo("top", { duration: 800 });  
        
        
        cy.wait(3000);
        cy.contains("Let's Discuss Your App ").click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
        cy.scrollTo("top", { duration: 800 });  
/**********Services**************/
        //Development Services
        cy.get('.heading-1 > h1').scrollIntoView();
        cy.wait(3000);
        cy.get(':nth-child(1) > .non-active-class > :nth-child(1)').invoke('show')
        cy.get('#development-services').click({force: true, multiple: true});
        cy.wait(3000);
        cy.go('back');

        //Business Continuity
        cy.get('.heading-1 > h1').scrollIntoView();
        cy.wait(3000);
        cy.get(':nth-child(2) > .non-active-class > :nth-child(1)').invoke('show')
        cy.get('#business-services').click({force: true, multiple: true});       
        cy.wait(3000);
        cy.go('back');
        
        //Managed Services
        cy.get('.heading-1 > h1').scrollIntoView();
        cy.wait(3000);
        cy.get(':nth-child(3) > .non-active-class > :nth-child(1)').invoke('show')
        cy.get('#managed-services').click({force: true, multiple: true}); 
        cy.wait(3000);
        cy.go('back');
        cy.scrollTo("top", { duration: 800 });

      })
    })