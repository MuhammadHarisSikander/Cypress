/// <reference types="Cypress" />

import dimensions, { mobile } from '../../../support/dimensions'
import data from '../../../fixtures/urls.json'

var linkedinBtnElem=":nth-child(1) > .hover-class > .div-buttonn > .button"
var rFPBtnElem =":nth-child(2) > .hover-class > .div-buttonn > .button"
var officeUsBtnElem=":nth-child(3) > .hover-class > .div-buttonn > .button"
var formSectionElem="#form-section"
var servicesNavElem="#navbarDropdown > :nth-child(1)"
var serviceUrlElem='a[href="/services/development-services.html"]'
var connectBtnElem="#lets-connect"
var startBtnElem="#get-started"
var meetingBtnElem=".div-button > .btn-hvr"
var headingElem=".text-side > :nth-child(1) > h2"
const ProficiencesCards = [
    {elem : "#CustomSoftwareDevelopment", heading: "Custom Software Development", url:data['custom-software']},
    {elem : "#ERPDevelopment", heading: "ERP Development Service", url:data['erp-service']},
    {elem : "#MobileApp", heading: "Mobile App Development", url:data['mobile-app-service']},
    {elem : "#ProcessandWorkflow", heading: "Process And Workflow Automation", url:data['process-automated-service']},
    {elem : "#APIDevelopment", heading: "API Development and Integration", url:data['api-development-service']},
    {elem : "#InternetThings", heading: "Internet of Things - IoT Service", url:data['iot-service']},
  ]
beforeEach(() => {
   
    cy.visit('/')
    cy.get(servicesNavElem).click()
    cy.get(serviceUrlElem).eq(1).click({force: true})
    
  })
   describe("Validate the redirection Development services page", () => {
     it('Validating the redirection', () => {
         cy.url().should('include', '/services/development-services.html')
     })
 })
 describe("Validate the redirection to consulation form on Development services", () => {
    it('Verify if the user redirect to form when user click on Get started', () => {
        cy.get(startBtnElem).should('have.text',"Get Started").click({force:true})
        cy.get(formSectionElem).should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Let connect', () => {
        cy.get(connectBtnElem).should('have.text',"Lets Connect").click({force:true})
        cy.get(formSectionElem).should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Schedule Meeting', () => {
        cy.get(meetingBtnElem).should('have.text',' Schedule a Meeting ').click({force:true})
        cy.get(formSectionElem).should('be.visible')
    })

 })
 describe("Validate Proficiences Cards Redirection", () => {
    ProficiencesCards.forEach((value, key) => {
        it('Verify if the user redirect to'+ ' ' + value.heading, () => {
            cy.get(value.elem).click({force:true})
            cy.url().should('include', value.url)
            cy.get(headingElem).should('have.text',value.heading)
        })
      });
 })
describe("Validate Contact with US cards Redirection", () => {

    it('Verify if the user redirect to linkedin', () => {
        cy.get(linkedinBtnElem).should('have.text'," Follow Appiskey ").invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'company/appiskey/')
    })
    it('Verify if the user redirect to form', () => {
        cy.get(rFPBtnElem).should('have.text'," Submit Now ").click({force:true})
        cy.get(formSectionElem).should('be.visible')
    
    })
    it('Verify if the user redirect to google map', () => {
        cy.get(officeUsBtnElem).should('have.text'," US Office Location ").invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', '/maps/place/219+N+Brown+Ave,+Orlando,+FL+32801,+USA')
       
    })
})
describe("Validate case study redirection", () => {
it('Verify if the user redirect to the case study of scout project', () => {
    cy.get('#readcasestudyScout', { timeout: 10_000 }).should('be.visible').click({force:true})
    cy.get('.color').should('have.text','SCOUT')
})
it('Verify if the user redirect to the case study of Gym Hub project', () => {
    cy.get('#readcasestudygymhub', { timeout: 10_000 }).should('be.visible').click({force:true})
    cy.get('.color').should('have.text','GYMHUB')
})
it('Verify if the user redirect to the case study of pet project', () => {
    cy.get('#readcasestudypet' , { timeout: 10_000 }).should('be.visible').click({force:true})
    cy.get('.color').should('have.text','Pet Planner')
})
})
describe("Checking page responsiveness", () => {
    Object.values(dimensions.mobile).map((key,i)=>{
        it('Validating responsiveness on'+ ' ' + key.viewportWidth +'x'+ key.viewportHeight, () => {
            cy.viewport(key.viewportWidth,key.viewportHeight)
            cy.get('.container > :nth-child(2)').should('be.visible')
            cy.get('#navbarText').should('not.be.visible')
            cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
            cy.scrollTo('right').window().its('scrollX').should('equal', 0);
         })
    })
    Object.values(dimensions.Tablet).map((key,i)=>{
        it('Validating responsiveness on'+ ' ' + key.viewportWidth +'x'+ key.viewportHeight, () => {
            cy.viewport(key.viewportWidth,key.viewportHeight)
            cy.get('.container > :nth-child(2)').should('be.visible')
            cy.get('#navbarText').should('not.be.visible')
            cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
            cy.scrollTo('right').window().its('scrollX').should('equal', 0);
           
         })
       
    })
    Object.values(dimensions.Desktop).map((key,i)=>{
        it('Validating responsiveness on'+ ' ' + key.viewportWidth +'x'+ key.viewportHeight, () => {
            cy.viewport(key.viewportWidth,key.viewportHeight)
            cy.get('.container > :nth-child(2)').should('not.be.visible')
            cy.get('#navbarText').should('be.visible')
            cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
            cy.scrollTo('right').window().its('scrollX').should('equal', 0)
         })
    })

})

