/// <reference types="Cypress" /> 
class petCreate {
    getPetScreen() {
        return cy.get('.jss900 > .MuiListItemText-root-874 > .MuiTypography-root-808')
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
        return cy.get(':nth-child(4) > :nth-child(2) > .jss996')
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

}
export default petCreate