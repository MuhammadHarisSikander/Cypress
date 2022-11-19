/// <reference types="Cypress" />
import ChangePassword from '../pageObject/changePassword'

describe("Fist test suite", () => {
    it('Visit visit', () => {
        const changePassword = new ChangePassword()
        login.TapOnProfile().click()
        login.getPassword().type('admin123')
        login.getSubmit().click()
    })

})

