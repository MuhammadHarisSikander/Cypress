class ChangePassword {
    TapOnProfile() {
        return cy.get('.oxd-userdropdown-tab > .oxd-icon')
    }
    ClickOnChangePass() {
        return cy.get(':nth-child(3) > .oxd-userdropdown-link')
    }
    ClickOnCurrentPass() {
        return cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    ClickOnNewPass() {
        return cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
    }
    ClickOnConfirmPass() {
        return cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    }

}