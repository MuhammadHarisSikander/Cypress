/// <reference types="Cypress" />
import ChangePassword from '../pageObject/changePassword'

describe("Fist test suite", () => {
    it('Visit visit', () => {
        const changePassword = new ChangePassword()
        changePassword.TapOnProfile().click()
        changePassword.ClickOnChangePass().click()
        changePassword.ClickOnCurrentPass().type('admin123')
        changePassword.ClickOnNewPass().type('admin123')
        changePassword.ClickOnConfirmPass().type('admin123')
        if (cy.get('.oxd-chip').contains('Weak')) {
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@123')
            cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@123')
            cy.get('.oxd-button--secondary').click()

        }
    })

})

