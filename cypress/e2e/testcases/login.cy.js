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
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(3) > .oxd-userdropdown-link').click()
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        if (cy.get('.oxd-chip').contains('Weak')) {
            cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@123')
            cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin@123')
            cy.get('.oxd-button--secondary').click()
            
        } 
    })
    
})
  
