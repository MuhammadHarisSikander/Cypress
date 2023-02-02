/// <reference types="Cypress" />

class Daycare {
    openReservation() {
        return cy.contains('Reservation')
    }
    getDaycareScreen() {
        return cy.contains('Day Care')
    }
    getDaycareCreateBtn() {
        return cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[2]/div[1]/div/button[2]/span[1]')
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
    getSelectPo() {
        return cy.get('#combo-box-demo-option-0')
    }
    getNextCta() {
        return cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > div > .MuiButtonBase-root')
    }
    getPetList() {
        return cy.get('input[type="checkbox"]')
    }
}
export default Daycare