/// <reference types="Cypress" /> 
class petCreate {
    getPetScreen() {
        return cy.xpath('//*[@id="fuse-navbar"]/div/div/div/ul/a[3]')
    }
    getPetCreateBtn() {
        return cy.get('.MuiButton-label')
    }
    getPoNames() {
        return cy.get('#combo-box-demo')
    }
    getPetType() {
        return cy.get('#demo-controlled-open-select')
    }
    getPetBreed() {
        return cy.get(':nth-child(4) > :nth-child(2) > .jss996') || cy.get(':nth-child(4) > :nth-child(2) > .jss940')
    }
    getPetName() {
        return cy.get(':nth-child(5) > :nth-child(2) > .jss996')
    }
    getPetDOB() {
        return cy.get('.MuiInputAdornment-root > .MuiButtonBase-root')
    }
    getPetYear() {
        return cy.get(':nth-child(1) > .MuiButton-label > .MuiTypography-root')
    }
    getPetGender() {
        return cy.get('#mui-component-select-gender')
    }
    getGenderSelect() {
        return cy.get('.MuiList-root > [tabindex="0"]')
    }
    getPetWeight() {
        return cy.get('[style="margin: 20px 0px;"] > :nth-child(2) > .jss996')
    }
    getPetColor() {
        return cy.get('[style="margin-bottom: 5px;"] > .MuiFormGroup-root')
    }
    getOpenColorList() {
        return cy.get('#mui-component-select-color')
    }
    //contact info
    getPetContactName() {
        return cy.get('[style="margin-top: 10px;"] > :nth-child(2) > .jss996')
    }
    getPetContactNum() {
        return cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    getPetContactMail() {
        return cy.get(':nth-child(6) > :nth-child(5) > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    getPetVetName() {
        return cy.get('[style="clear: both;"] > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    getPetVetNum() {
        return cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    //Behavioral issue
    getPetAggresive() {
        return cy.get('form > :nth-child(8) > :nth-child(2)')
    }
    getPetTemperamented() {
        return cy.get(':nth-child(8) > :nth-child(4)')
    }
    getPetFireWork() {
        return cy.get(':nth-child(8) > :nth-child(6)')
    }
    getPetAnexity() {
        return cy.get(':nth-child(8) > :nth-child(8)')
    }
    getPetStress() {
        return cy.get(':nth-child(9) > :nth-child(2) > :nth-child(2) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
    }
    //Strangers Stats
    getPetReactToStranger() {
        return cy.get('form > :nth-child(9) > :nth-child(2)')
    }
    getPetEscape() {
        return cy.get(':nth-child(9) > :nth-child(4)')
    }
    getPetFedSeparat() {
        return cy.get('[style="margin: 10px 0px;"] > .MuiFormGroup-root')
    }
    getPetPlayWithOther() {
        return cy.get(':nth-child(9) > :nth-child(7)')
    }
    getPetChew() {
        return cy.get(':nth-child(9) > :nth-child(9)')
    }
    getPetBoarded() {
        return cy.get(':nth-child(9) > :nth-child(11)')
    }


}
export default petCreate