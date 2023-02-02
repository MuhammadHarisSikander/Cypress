/// <reference types="Cypress" />

class Grooming {
    openReservation() {
        return cy.contains('Reservation')
    }
    getGroomingScreen() {
        return cy.contains('Grooming')
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
    getSelectPo(){
        return cy.get('#combo-box-demo-option-0')
    }
    getFocusArrivedDate(){
        return cy.xpath('//*[@id="date"]')
    }
}

export default Grooming