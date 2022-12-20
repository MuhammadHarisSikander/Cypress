/// <reference types="Cypress" />
import Daycare from "../pageObject/Daycare"
describe('Daycare', () => {
    beforeEach(() => {
        cy.Login('stage.admin@petplannersoftware.com', 'gCLoU9LU')
    })
    it('Daycare reservation Smoke test', () => {
        const daycare = new Daycare()
        daycare.openReservation().click()
        daycare.getDaycareScreen().click()
        cy.wait(5000)
        daycare.getDaycareCreateBtn().click()
        daycare.getPetOwnerName().type('Haris sikk Sikander')
    })
})