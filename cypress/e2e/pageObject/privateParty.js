/// <reference types="Cypress" />

class PrivateParty {
    openReservation() {
        return cy.contains('Reservation')
    }
    getPrivatePartyScreen() {
        return cy.contains('Private Party')
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
    getSelectPo() {
        return cy.get('#combo-box-demo-option-0')
    }
}
export default PrivateParty