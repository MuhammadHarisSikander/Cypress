/// <reference types="Cypress" />

import dimensions, { mobile } from '../../../support/dimensions'

var startBtnElem="#get-started"
var servicesNavElem="#navbarDropdown > :nth-child(1)"
var serviceUrlElem='#Cuservices'
var formSectionElem="#form-section"
var prjectBtnElem=":nth-child(3) > .btn-hvr"
var bookFreeBtnElem="#book-free"

beforeEach(() => {
   
    cy.visit('/')
    cy.get(servicesNavElem).click()
    cy.get(serviceUrlElem).click({force: true})
  })
  describe("Validate the redirection on custom Development page", () => {
    it('Validating the redirection', () => {
        cy.url().should('include', '/services/custom-software-development.html')
    })
})
describe("Validate the redirection to consulation form on Development services", () => {
    it('Verify if the user redirect to form when user click on Get started', () => {
        cy.get(startBtnElem).should('have.text',"Get Started").click({force:true})
        cy.get(formSectionElem).should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Disuss your project', () => {
        cy.get(prjectBtnElem).should('have.text',"Discuss Your Project").click({force:true})
        cy.get(formSectionElem).should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Book Free Consultation', () => {
        cy.get(bookFreeBtnElem).should('have.text',"Book Free Consultation").click({force:true})
        cy.get(formSectionElem).should('be.visible')
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
                cy.get('.fa-bars').should('be.visible')
                cy.get('#navbarText').should('not.be.visible')
                cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
                cy.scrollTo('right').window().its('scrollX').should('equal', 0);
             })
        })
        Object.values(dimensions.Tablet).map((key,i)=>{
            it('Validating responsiveness on'+ ' ' + key.viewportWidth +'x'+ key.viewportHeight, () => {
                cy.viewport(key.viewportWidth,key.viewportHeight)
                cy.get('.fa-bars').should('not.be.visible')
                cy.get('#navbarText').should('not.be.visible')
                cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
                cy.scrollTo('right').window().its('scrollX').should('equal', 0);
               
             })
           
        })
        Object.values(dimensions.Desktop).map((key,i)=>{
            it('Validating responsiveness on'+ ' ' + key.viewportWidth +'x'+ key.viewportHeight, () => {
                cy.viewport(key.viewportWidth,key.viewportHeight)
                cy.get('.fa-bars').should('not.be.visible')
                cy.get('#navbarText').should('be.visible')
                cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);
                cy.scrollTo('right').window().its('scrollX').should('equal', 0)
             })
        })
    
    })
