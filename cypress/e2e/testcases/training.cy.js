/// <reference types="Cypress" />
const dayjs = require('dayjs')
import Training from "../pageObject/training"
describe('Training', () => {
    beforeEach(() => {
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Training reservation Smoke test', {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    }, () => {
        const training = new Training()
        let wait = cy.wait(2000)
        training.openReservation().click()
        training.getTrainingScreen().click()
        cy.get('button').contains('Create Training').first().click()
        training.getPetOwnerName().type('Elon musk')
        wait
        training.getSelectPo().should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Elon Musk/)
        })
        training.getSelectPo().click()
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root').eq(0).focus()
        cy.get('.MuiButton-label').click()
        cy.get('ul').contains('E dog').first().click()
        cy.get('input[type="radio"]').eq(0).check()
        cy.get('#outlined-multiline-static').type("Test by Cypress")
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root').focus()
        cy.get('.MuiButton-label').click()
        cy.get('.MuiButton-contained').focus()
        cy.get('.MuiButton-contained > .MuiButton-label').click()
    })

    it('Cancel Training reservation', {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    }, () => {
        const training = new Training()
        let wait = cy.wait(2000)
        training.openReservation().click()
        training.getTrainingScreen().click()
        cy.get('.jss969 > .MuiInputBase-root > .MuiInputBase-input').type('Elon Musk').type('{enter}')
        cy.get('.MuiList-root > [tabindex="-1"]').click({ force: true, multiple: true })
        cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary').eq(0).focus()
        cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary > .MuiButton-label').click()
        cy.get('.MuiAlert-message').should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Reservation Cancelled/)
        })
    })
})