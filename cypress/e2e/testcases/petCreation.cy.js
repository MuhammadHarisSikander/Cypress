/// <reference types="Cypress" />
import petCreate from '../pageObject/petCreation'

describe("Create a pet", () => {
    beforeEach(() => {
        // cy.wait(2000)
        cy.Login('stage.admin@petplannersoftware.com', 'gCLoU9LU')
    })
    it('Pet creation Smoke test', () => {
        const PetCreate = new petCreate()
        cy.wait(1000)
        PetCreate.getPetScreen().click()
        PetCreate.getPetCreateBtn().click()
        cy.wait(1000)
        PetCreate.getPoNames().click().type('Haris sikk Sikander').click()
        cy.wait(2000)
        cy.get('#combo-box-demo-popup').click()
        PetCreate.getPetType().click()
        cy.get('.MuiList-root').click()
        PetCreate.getPetBreed().type('Cypress')
        PetCreate.getPetName().type('Cypress Dog')
        PetCreate.getPetDOB().click()
        PetCreate.getPetYear().click()
        cy.get('.MuiPickersYearSelection-container > :nth-child(122)').click()
        //Pet DOB condition
        cy.get('.MuiPickersSlideTransition-transitionContainer > .MuiTypography-root').then((val) => {
            if (val.text() !== 'January 2021') {
                cy.get('.MuiPickersCalendarHeader-switchHeader > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root').dblclick()
                cy.get('.MuiPickersCalendar-transitionContainer > :nth-child(1) > :nth-child(1) > :nth-child(6)').click
                cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
            }
        })
        PetCreate.getPetGender().click()
        PetCreate.getGenderSelect().click()
        PetCreate.getPetWeight().type('200')
        PetCreate.getPetColor().contains('Multi').click()
        PetCreate.getOpenColorList().click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('.MuiList-root > :nth-child(2)').click()
        cy.get('body').type('{esc}')
        cy.get(':nth-child(12) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type("My Pet is sweet")
        cy.get(':nth-child(4) > :nth-child(2) > .MuiButtonBase-root').selectFile('cypress/img/dog.jpg')
        cy.get(':nth-child(9) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type('Stressful')
        cy.get(':nth-child(6) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type('Other pet')
        cy.get('.jss998 > #stp1').click()
        cy.wait(5000)
        cy.get('.jss704 > .ps__rail-y').scrollIntoView({ offset: { top: 0, left: 0 } })
        cy.wait(1000)
        cy.get('[style="display: flex; justify-content: end;"] > div > .MuiButtonBase-root').click()
        cy.wait(1000)
        cy.get(':nth-child(14) > .MuiButtonBase-root').selectFile('cypress/img/dog.jpg')
        cy.wait(1000)
        cy.get('[style="display: flex; justify-content: end;"] > div > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(3) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root').type("Please give some food")
        cy.get('[style="display: flex; justify-content: end;"] > div > .MuiButtonBase-root').click()
        cy.wait(2000)
        cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Cypress Dog {enter}')
        cy.get(':nth-child(1) > .MuiTableCell-alignCenter').should('contain.text', 'Cypress Dog')
        // cy.get('.jss704 > .ps__rail-y > .ps__thumb-y').scrollTo('top')
        // cy.get('.jss704 > .ps__rail-y').scrollIntoView({ offset: { top: 150, left: 0 } })
        // cy.get('[style="display: flex; justify-content: end;"] > div > .MuiButtonBase-root').click({ force: true })

    })

})


