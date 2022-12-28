///<reference types="Cypress" />

const dimensions = require("../dimensions");
//hello there
beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })

describe("Verify that user can visit the website and clicks on the lets connect,schedule an appointement,Discuss your app", () => {
        Object.values(dimensions).map((key, i) => {

                it("Scrolling", () => {
                    cy.viewport(key.viewportWidth, key.viewportHeight)
                    cy.visit('https://qa.appiskey.com/');
        cy.get('.banner').focus;
        cy.contains('Lets Connect').click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
        cy.scrollTo("top", { duration: 800 }); 
                             
        //scroll to schedule an appointement, click and open form                                                             
        cy.get('.index-message').scrollIntoView();
        cy.wait(3000);
        cy.get('.index-message').contains('Schedule an Appointment ').click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
        cy.scrollTo("top", { duration: 800 });  
        
        //scroll to lets discuss your app, click and open form
        cy.get('#ios > .list-inline').scrollIntoView();                     
        cy.wait(3000);
        cy.contains("Let's Discuss Your App ").click
        cy.wait(3000);
        cy.get("#form-section").scrollIntoView();
        cy.wait(3000);
               
       
        
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
        
        cy.get('#managed-services').click({force: true, multiple: true}); 
        cy.wait(3000);
        cy.go('back');
        cy.scrollTo("top", { duration: 800 });
                })
        
            })
  
                                        
})                                                   
 
                                                                
       
                
       
        




/*
        it("fill form", () => {
        cy.visit('https://qa.appiskey.com/');
        cy.get('#name').type('Marwah').click({force: true})
        cy.get('#email').type('marwa.khurshid@appiskey.com')
        cy.get('#phone').type('012345678901')
        cy.get('#company_name').type('APPISKEY')
        cy.get('#revenue').type('300000')
        cy.get('#industry').type('Software Industry')
        cy.get('#message').type('Appiskey provides tailored IT solutions and ongoing services, with 24/7 competent and disruptive resources on the go')
        cy.get('[type="checkbox"]').check()
        describe("Verify that user can schedule an appointment", () => {
        it("schedule an appointement", () => {
        cy.wait(3000);
        cy.get('btn-hvr button').should.have('contains',Schedule an Appointment ').click
        cy.get("project-consultation").scrollIntoView();

         })
        
 })     */  


