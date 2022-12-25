/// <reference types="Cypress" />
import petCreate from '../pageObject/petCreation'

describe("Create a pet", () => {
    beforeEach(() => {
        // cy.wait(2000)
        cy.Login('stage.admin@petplannersoftware.com', 'gCLoU9LU')
    })
    it('Pet creation Smoke test', {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    }, () => {
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

        //contact info
        PetCreate.getPetContactName().clear().type('Cypress Test')
        PetCreate.getPetContactNum().clear().type('03311280612')
        PetCreate.getPetContactMail().clear().type('cypress@yopmail.com')
        PetCreate.getPetVetName().clear().type('Cypress Vet')
        PetCreate.getPetVetNum().clear().type('03311280612')

        //Agressive issue
        PetCreate.getPetAggresive().contains('Yes').click()
        cy.get(':nth-child(1) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(8) > :nth-child(3) > :nth-child(2) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(3) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(4) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(5) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(3) > :nth-child(6) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Aggresive')

        //Tempramented issue
        PetCreate.getPetTemperamented().contains('Yes').click()
        cy.get(':nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
        cy.get(':nth-child(3) > :nth-child(4) > .MuiButtonBase-root').click()
        cy.get('.MuiDialogActions-root > :nth-child(2)').click()
        cy.get(':nth-child(5) > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type('Cypress')

        //FireWork Issue
        PetCreate.getPetFireWork().contains('Yes').click()
        cy.get(':nth-child(7) > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Firework')
        cy.get(':nth-child(7) > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Calming Technique')

        //Anxiety Issue
        PetCreate.getPetAnexity().contains('Yes').click()
        cy.get(':nth-child(9) > :nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Anxiety Issue')
        cy.get(':nth-child(9) > :nth-child(2) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Anxiety Treatment')

        //Stressful issue
        PetCreate.getPetStress().type('Stressful')

        //Stranger Stats
        PetCreate.getPetReactToStranger().contains('Yes').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(1) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(2) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(3) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(4) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(5) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(9) > :nth-child(3) > :nth-child(6) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('React To Stranger')

        //Escape issue
        PetCreate.getPetEscape().contains('Yes').click()
        cy.get(':nth-child(5) > :nth-child(1) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(5) > :nth-child(2) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(5) > :nth-child(3) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(5) > :nth-child(4) > .MuiFormControlLabel-root').click()
        cy.get(':nth-child(5) > :nth-child(5) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('escape ')
        cy.get(':nth-child(5) > :nth-child(6) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('tactics')

        //fed & play
        PetCreate.getPetFedSeparat().contains('Yes').click()
        PetCreate.getPetPlayWithOther().contains('Yes').click()
        PetCreate.getPetChew().contains('Yes').click()
        cy.get(':nth-child(9) > :nth-child(10) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Chew random object')
        PetCreate.getPetBoarded().contains('Yes').click()

        //Next Page
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
        cy.get('.jss704 > .ps__rail-y > .ps__thumb-y').scrollTo('top')
        cy.get('.jss704 > .ps__rail-y').scrollIntoView({ offset: { top: 150, left: 0 } })
        cy.get('[style="display: flex; justify-content: end;"] > div > .MuiButtonBase-root').click({ force: true })

    })

})


