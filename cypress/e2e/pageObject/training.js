/// <reference types="Cypress" />

class Training {
    openReservation() {
        return cy.contains('Reservation')
    }
    getTrainingScreen() {
        return cy.contains('Training')
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
    getSelectPo() {
        return cy.get('#combo-box-demo-option-0')
    }
}
export default Training