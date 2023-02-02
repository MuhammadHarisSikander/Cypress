/// <reference types="Cypress" />
const dayjs = require('dayjs')
import PrivateParty from "../pageObject/privateParty"
describe('PrivateParty', () => {
    beforeEach(() => {
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('PrivateParty reservation Smoke test', {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    }, () => {
        const privateParty = new PrivateParty()
        let wait = cy.wait(2000)
        privateParty.openReservation().click()
        privateParty.getPrivatePartyScreen().click()
        cy.get('button').contains('Create Private Party').first().click()
        cy.get('#combo-box-demo').type('Elon musk')
        wait
        privateParty.getSelectPo().should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Elon Musk/)
        })
        privateParty.getSelectPo().click()
        cy.get('.MuiDialogContent-root > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(5)
        cy.get(':nth-child(3) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Birthday')
        // cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(dayjs().add(, 'day').format('YYYY-MM-DDT14:00'))
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(dayjs().format('YYYY-MM-DDT11:00'))
        cy.get('.MuiDialogActions-root > .MuiButton-contained').focus()
        cy.get('.MuiDialogActions-root > .MuiButton-contained > .MuiButton-label').click()
        cy.get('.MuiAlert-message').should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            if (className == "Already reserved on this date") {
                expect(className).to.match(/Already reserved on this date/)
            } else {
                expect(className).to.match(/Created Private Party successfully/)
            }

        })



    })
})