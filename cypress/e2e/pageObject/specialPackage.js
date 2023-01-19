/// <reference types="Cypress" /> 
class Boarding {
    openReservation() {
        return cy.contains('Reservation')
    }
    getSpecialPackage(){
        return cy.contains('Special Package')
    }
    getCreateBtn(){
        return cy.get('.jss966 > div > :nth-child(2)')
    }
    getPetOwner(){
        return cy.get('.MuiInputBase-root')
    }
    getSelectPet(){
        return cy.get('#combo-box-demo-option-0')
    }
    getNextCta(){
        return cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root')
    }
    getArrivalDate(){
        return cy.get(':nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    getDepartureDate(){
        return cy.get(':nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    getPetList(){
        return cy.get('input[type="checkbox"]') 
    }
    getPackage(){
        return cy.get('#demo-mutiple-chip')
    }
    getSelectPackage(){
        return cy.get('.MuiList-root > .MuiButtonBase-root')
    }
    getCreateReservation(){
        return cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root')
    }
    getFinishBtn(){
        return cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/button[2]')
    }
    getActionBtn(){
        return cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root')
    }
    getCancelBooking(){
        return cy.get('.MuiList-root > :nth-child(3)')
    }
    getConfirmCancelBooking(){
        return cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary')
    }
    getCheckin(){
        return cy.get('.MuiList-root > :nth-child(4)')
    }
    getCheckOut(){
        return cy.get('.MuiList-root > :nth-child(3)')
    }
}
export default Boarding