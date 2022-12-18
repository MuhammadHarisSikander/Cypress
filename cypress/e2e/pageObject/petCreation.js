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
    getPetGender() {
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
    getNavigateBack() {
        return cy.get('.MuiPickersCalendarHeader-switchHeader > :nth-child(1) > .MuiIconButton-label > .MuiSvgIcon-root')
    }
    getNavigateForward() {
        return cy.get(':nth-child(3) > .MuiIconButton-label > .MuiSvgIcon-root')
    }
    getMonthYear() {
        return cy.get('.MuiTypography-root MuiTypography-body1 MuiTypography-alignCenter')
    }
}
export default petCreate