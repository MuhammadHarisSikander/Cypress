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
        //4b54f2ec-7fd5-4c66-a930-cf9ffacc8b8e
    })
})