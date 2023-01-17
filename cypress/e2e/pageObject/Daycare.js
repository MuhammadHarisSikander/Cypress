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
        // cy.get('.jss970 > div > :nth-child(2)')
        // MuiButton-label
    }
    getPetOwnerName() {
        return cy.get('.MuiInputBase-root')
    }
    getSelectPo(){
        return cy.get('#combo-box-demo-option-0')
    }
    getNextCta(){
        return cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > div > .MuiButtonBase-root')
    }
    getPetList(){
        // return cy.get(':nth-child(1) > [style="padding: 8px;"] > .MuiPaper-root > .MuiList-root')
        return cy.get('input[type="checkbox"]') 
        // cy.get('.MuiList-root > :nth-child(1) > .MuiListItem-root [type="checkbox"]') 
        // cy.get('.jss530 [type="checkbox"]') 
        // cy.get('.MuiList-root jss526 MuiList-dense MuiList-padding [type="checkbox"]')
    }
}
export default Daycare