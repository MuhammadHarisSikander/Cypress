/// <reference types="Cypress" />
import Login from '../pageObject/login'

describe("Fist test suite", ()=> {
    it('Visit visit', () => {
        const login = new Login()
        // cy.fixture('example').then(function(data) {
        //     this.data = data
        // })
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        login.getEmail().type('Admin')
        login.getPassword().type('admin123')
        login.getSubmit().click()
    })
    
})
  
