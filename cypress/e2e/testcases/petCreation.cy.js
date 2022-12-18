/// <reference types="Cypress" />
import petCreate from '../pageObject/petCreation'

describe("Create a pet", () => {
    beforeEach(() => {
        // cy.wait(2000)
        cy.Login('stage.admin@petplannersoftware.com', 'gCLoU9LU')
    })
    it('Pet creation Smoke test', () => {
        const PetCreate = new petCreate()
        PetCreate.getPetScreen().click()
        PetCreate.getPetCreateBtn().click()
        cy.wait(200)
        PetCreate.getPoNames().click().type('Haris sikk Sikander').click()
        cy.wait(200)
        cy.get('#combo-box-demo-popup').click()
        PetCreate.getPetGender().click()
        cy.get('.MuiList-root').click()
        PetCreate.getPetBreed().type('Cypress')
        PetCreate.getPetName().type('Cypress Dog')
        PetCreate.getPetDOB().click()
        PetCreate.getPetYear().click()
        cy.get('.MuiPickersYearSelection-container > :nth-child(122)').click()
        // cy.get('.MuiPickersSlideTransition-transitionContainer > .MuiTypography-root').then((value) => {
        //     console.log(value.text());
        // })

        const txt = ''
        cy.get('.MuiPickersSlideTransition-transitionContainer > .MuiTypography-root').then((val) => {
            // cy.log(val.text())
            // txt == val.text()
            if (val.text() !== 'January 2021') {
                cy.get('.MuiPickersCalendarHeader-switchHeader > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root').dblclick()
                cy.get('.MuiPickersCalendar-transitionContainer > :nth-child(1) > :nth-child(1) > :nth-child(6)').click
                cy.get('.MuiDialogActions-root > :nth-child(2) > .MuiButton-label').click()
            }

        })



        // {
        //     cy.get(':nth-child(1) > :nth-child(6) > .MuiButtonBase-root > .MuiIconButton-label').click()
        //     cy.get('.MuiDialogActions-root > :nth-child(2)').click()

        // }
        // else {
        //     cy.wait(2000)
        //     return cy.get('.MuiPickersCalendarHeader-switchHeader > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root').click()
        // }

        // cy.get('.MuiAutocomplete-root > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root').select('Haris sikk Sikander')
        // cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').click()
        // PetCreate.getPoNames().type('Haris sikk Sikander {enter} ')
        // cy.get('#combo-box-demo').click("Haris sikk Sikander")

        // PetCreate.getPassword().type()
        // PetCreate.getSubmit().click()
    })

})


