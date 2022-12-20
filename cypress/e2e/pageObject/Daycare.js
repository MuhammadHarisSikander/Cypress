/// <reference types="Cypress" />

class Daycare {
    openReservation() {
        return cy.get(':nth-child(8) > .jss881')
    }
    getDaycareScreen() {
        return cy.get('.jss904')
    }
    getDaycareCreateBtn() {
        return cy.get('.jss970 > div > :nth-child(2)')
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
}
export default Daycare