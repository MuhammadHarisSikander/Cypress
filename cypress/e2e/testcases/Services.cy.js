/// <reference types="Cypress" />

import data from './../../fixtures/urls.json'

var linkedinBtnElem = ":nth-child(1) > .hover-class > .div-buttonn > .button"
var rFPBtnElem = ":nth-child(2) > .hover-class > .div-buttonn > .button"
var officeUsBtnElem = ":nth-child(3) > .hover-class > .div-buttonn > .button"
const ProficiencesCards = [
    { elem: "#CustomSoftwareDevelopment", heading: "Custom Software Development", url: data['custom-software'] },
    { elem: "#ERPDevelopment", heading: "ERP Development Service", url: data['erp-service'] },
    { elem: "#MobileApp", heading: "Mobile App Development", url: data['mobile-app-service'] },
    { elem: "#ProcessandWorkflow", heading: "Process And Workflow Automation", url: data['process-automated-service'] },
    { elem: "#APIDevelopment", heading: "API Development and Integration", url: data['api-development-service'] },
    { elem: "#InternetThings", heading: "Internet of Things - IoT Service", url: data['iot-service'] },
]
beforeEach(() => {
    cy.visit('/')
    cy.get('#navbarDropdown > :nth-child(1)').click()
    cy.get('a[href="/services/development-services.html"]').eq(1).click({ force: true })

})
describe("Validate the redirection Development services page", () => {
    it('Validating the redirection', () => {
        cy.url().should('include', '/services/development-services.html')
    })
})
describe("Validate the redirection to consulation form on Development services", () => {
    it('Verify if the user redirect to form when user click on Get started', () => {
        cy.get(':nth-child(5) > .btn-hvr').should('have.text', "Get Started").click({ force: true })
        cy.get('#form-section').should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Let connect', () => {
        cy.get(':nth-child(3) > .btn-hvr').should('have.text', "Lets Connect").click({ force: true })
        cy.get('#form-section').should('be.visible')
    })
    it('Verify if the user redirect to form when user click on Schedule Meeting', () => {
        cy.get('.div-button > .btn-hvr').should('have.text', ' Schedule a Meeting ').click({ force: true })
        cy.get('#form-section').should('be.visible')
    })

})
describe("Validate Proficiences Cards Redirection", () => {
    ProficiencesCards.forEach((value, key) => {
        it('Verify if the user redirect to' + ' ' + value.heading, () => {
            cy.get(value.elem).click({ force: true })
            cy.url().should('include', value.url)
            cy.get('.text-side > :nth-child(1) > h2').should('have.text', value.heading)
        })
    });
})
describe("Validate Contact with US cards Redirection", () => {

    it('Verify if the user redirect to linkedin', () => {
        cy.get(linkedinBtnElem).should('have.text', " Follow Appiskey ").invoke('removeAttr', 'target').click({ force: true })
        cy.url().should('include', '')
    })
    it('Verify if the user redirect to form', () => {
        cy.get(rFPBtnElem).should('have.text', " Submit Now ").click({ force: true })
        cy.get('#form-section').should('be.visible')

    })
    it('Verify if the user redirect to google map', () => {
        cy.get(officeUsBtnElem).should('have.text', ' US Office Location ').invoke('removeAttr', 'target').click({ force: true })
        cy.get('.tAiQdd').should('include', '219 N Brown Ave')
        // cy.url().should('include', 'https://www.google.com/maps/place/')
    })
})

