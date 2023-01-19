/// <reference types="Cypress" /> 
class Boarding {
    openReservation() {
        return cy.contains('Reservation')
    }
    getBoardingScreen(){
        return cy.contains("Boarding")
    }
    getCreateBoarding(){
        return cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[2]/div[1]/div/button[2]/span[1]')
    }
    getPetOwner(){
        return cy.get('#combo-box-demo')
    }
    getSelectPetOwner(){
        return cy.get('#combo-box-demo-option-0')
    }
    getArrivedDate(){
        return cy.get('.jss999 > .MuiFormControl-root > .MuiInputBase-root > #date')
    }
    getDepartureDate(){
        return cy.get('.jss1000 > .MuiFormControl-root > .MuiInputBase-root > #date')
    }
    getSearchPet(){
        return cy.get(':nth-child(2) > .boardingres_petowner_inp_div__1NLOY > .mt-8 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root')
    }
    getPetSelect(){
        return cy.get('[style="width: 100%; display: flex; justify-content: space-between; align-items: center;"]')
    }
    getSelectRoom(){
        return cy.get('.jss1000 > .MuiButtonBase-root > .MuiButton-label')
    }
    getRoomOne(){
        return cy.get('tbody > :nth-child(6) > :nth-child(4)')
    }
    getRoomTwo(){
        return cy.get(':nth-child(6) > :nth-child(5)')
    }
    getRoomDoneBtn(){
        return cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label')
    }
    getAddService(){
        return cy.get('.flex > div > .MuiButtonBase-root > .MuiButton-label')
    }
    getAddonService(){
        return cy.contains("per pet")
    }
    getNextBtn(){
        return cy.get('[style="display: flex; justify-content: flex-end; margin-right: 23px;"] > .MuiButtonBase-root')
    }
    getFinishBtn(){
        return cy.get('.MuiButton-contained > .MuiButton-label')
    }
}
export default Boarding 