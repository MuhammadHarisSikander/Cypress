/// <reference types="Cypress" />
const dayjs = require('dayjs')
import Grooming from "../pageObject/grooming"

describe('Grooming admin', () => {
    
    beforeEach(() => {
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Grooming reservation Smoke test', 
    //  {
    //     retries: {
    //       runMode: 2,
    //       openMode: 1,
    //     },
    //   },
       () => {
            let wait = cy.wait(2000)
        const grooming = new Grooming()
        grooming.openReservation().click()
        grooming.getGroomingScreen().click()
        wait
        //condition if an element has two CSS selector
        cy.get('button').contains('Create Grooming').first().click()
        grooming.getPetOwnerName().type('Elon musk')
        wait
        grooming.getSelectPo().should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Elon Musk/)
        })
        grooming.getSelectPo().click()
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root').eq(0).focus()
        cy.get('.MuiButton-label').click()
        cy.get('.mt-8 > .MuiInputBase-root > .MuiInputBase-input').eq(0).focus({ force: true }).type(dayjs().format('YYYY-MM-DD'))
        cy.get('ul').contains('E dog').first().click()
        cy.get('input[type="checkbox"]').eq(0).check()
        cy.get('input[type="radio"]').eq(1).check() 
        cy.get('#outlined-multiline-static').type("Test by Cypress")
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > div > .MuiButtonBase-root').focus()
        cy.get('.MuiButton-label').click()
        cy.get('.MuiButton-contained').focus()
        cy.get('.MuiButton-contained > .MuiButton-label').click()
      })


    it("Approve Groomer request",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        cy.visit("https://qa-groomer.petplannersoftware.com")
        cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear().type("shazad.groomer@mailinator.com")
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type("mwN3Jj0g")
        cy.get('.MuiButtonBase-root').focus()
        cy.get('.MuiButton-label').click()
        cy.contains('Jobs').click()
        cy.get('button').contains('Details').first().click()
        cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogContent-root').scrollTo(0, 700)
        cy.get('#demo-simple-select').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        cy.get('#outlined-multiline-static').type("Cypress test")
        cy.get('button').contains('Submit').first().click()
        cy.wait(1000)
        cy.get('.MuiAlert-message').should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Update Successfully/)
          })



    })

      it('Groomer Estimated & Groomer Approval', 
    //  {
    //     retries: {
    //       runMode: 2,
    //       openMode: 1,
    //     },
    //   },
       () => {
            let wait = cy.wait(2000)
        const grooming = new Grooming()
        cy.contains("Reservation").eq(0).click({force:true})
        cy.contains("Grooming").eq(0).click({force:true})
        cy.contains("Groomer Process").click({force:true})
        cy.get('button').contains('Details').first().click()
        cy.get('#demo-simple-select').click()
        cy.get('.MuiList-root > .MuiButtonBase-root').click()
        cy.get('#outlined-multiline-static').type("Cypress Approved")
        cy.get('button').contains('Submit').first().click()
        cy.get('.MuiAlert-message').should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Updated Successfull/)
         })
        cy.get('button').contains('Shared').first().click({force:true})      
        cy.get('button').contains('update').first().click({force:true})      
        cy.get('button').contains('Submit').first().click({force:true})      
        cy.get('button').contains('Submit').first().click({force:true})
        cy.get('.MuiAlert-message').should(($div) => {
            const className = $div[0].innerText
            console.log(className, "Harisssss");
            expect(className).to.match(/Update Successfully/)
         })
      })




     it('Checkin Groomer reservation', 
     {
        retries: {
          runMode: 2,
          openMode: 1,
        },
      },
       () => {
            let wait = cy.wait(2000)
        const grooming = new Grooming()
        grooming.openReservation().click()
        grooming.getGroomingScreen().click()
        cy.wait(2000)
        // wait
        cy.get('.jss969 > .MuiInputBase-root > .MuiInputBase-input').click({force:true}).type('Elon Musk').type('{enter}')
        cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true, multiple: true })
        cy.get('.MuiList-root > :nth-child(4)').click({ force: true, multiple: true })
        cy.get('.MuiAlert-message').should(($div) => {
          const className = $div[0].innerText
          console.log(className, "Harisssss");
          expect(className).to.match(/Check in Successfully/)
        })
      })



      it('Check-out Groomer reservation', 
     {
        retries: {
          runMode: 2,
          openMode: 1,
        },
      },
       () => {
            let wait = cy.wait(2000)
        const grooming = new Grooming()
        grooming.openReservation().click()
        grooming.getGroomingScreen().click()
        cy.wait(2000)
        // wait
        cy.get('.jss969 > .MuiInputBase-root > .MuiInputBase-input').click({force:true}).type('Elon Musk').type('{enter}')
        cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true, multiple: true })
        cy.get('.MuiList-root > :nth-child(3)').click({ force: true, multiple: true })
        wait
        cy.get('.MuiAlert-message').should(($div) => {
          const className = $div[0].innerText
          console.log(className, "Harisssss");
          expect(className).to.match(/Check out successfully/)
        })
      })
    })


