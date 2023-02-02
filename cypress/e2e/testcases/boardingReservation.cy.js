/// <reference types="Cypress" />
const dayjs = require('dayjs')
// import { first } from 'cypress/types/lodash'
import Boarding from '../pageObject/boarding'



describe("Boarding",
  // {
  // retries: {
  //   runMode: 2,
  //   openMode: 1,
  // },
  // },
  () => {
    beforeEach(() => {
      cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Create a Boarding reservation', () => {
      const boarding = new Boarding()
      boarding.openReservation().click({ force: true })
      boarding.getBoardingScreen().click({ force: true })
      cy.wait(2000)
      cy.get('button').contains('Create Grooming').first().click()
      // boarding.getCreateBoarding().click({ force: true })
      boarding.getPetOwner().click({ force: true }).type("Elon musk")
      cy.wait(1000)
      boarding.getSelectPetOwner().click({ force: true })
      boarding.getFocusArrivedDate().eq(0).focus({ force: true }).type(dayjs().format('YYYY-MM-DDT11:00'))
      // boarding.getArrivedDate().type(dayjs().format('YYYY-MM-DDT11:00'))
      boarding.getFocusArrivedDate().eq(1).focus({ force: true }).type(dayjs().add(1, 'day').format('YYYY-MM-DDT14:00'))
      boarding.getSearchPet().click({ force: true }).type('E dog')
      boarding.getPetSelect().click({ force: true })
      cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[4]/div/div[2]/div[3]/button').first().focus({ force: true }).click({ force: true })
      cy.get(':nth-child(2) > :nth-child(1)').contains('Automation')
      let y = 2
      for (let x = 2; x <= 7; x++) {
        cy.get(`tbody > :nth-child(${y}) > :nth-child(${x})`).click({ multiple: true, force: true })
      }
      cy.get('.MuiDialogActions-root > .MuiButtonBase-root').focus()
      cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.flex > div > .MuiButtonBase-root').focus()
      cy.get('.flex > div > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.MuiPaper-root').contains('per pet').click()
      cy.get('[style="display: flex; justify-content: flex-end; margin-right: 23px;"] > .MuiButtonBase-root').eq(0).focus()
      cy.get('[style="display: flex; justify-content: flex-end; margin-right: 23px;"] > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.MuiTypography-h6').should(($div) => {
        const className = $div[0].innerText
        console.log(className, "Harisssss");
        expect(className).to.match(/Billing Summary/)
      })
      cy.get('.MuiButton-contained').eq(0).focus()
      cy.get('.MuiButton-contained > .MuiButton-label').click()
    })

    it('Cancel Booking', () => {
      const boarding = new Boarding()
      boarding.openReservation().click({ force: true })
      boarding.getBoardingScreen().click({ force: true })
      cy.wait(2000)
      cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').type('Elon Musk').type('{enter}')
      cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true, multiple: true })
      cy.get('.MuiList-root > :nth-child(3)').click({ force: true, multiple: true })
      cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary').eq(0).focus()
      cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary > .MuiButton-label').click()
      cy.get('.MuiAlert-message').should(($div) => {
        const className = $div[0].innerText
        console.log(className, "Harisssss");
        expect(className).to.match(/Reservation Cancelled/)
      })
      // cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').clear().type('Elon Musk').type('{enter}')
    })


    it('Create a Boarding reservation', () => {
      const boarding = new Boarding()
      boarding.openReservation().click({ force: true })
      boarding.getBoardingScreen().click({ force: true })
      cy.wait(2000)
      // boarding.getCreateBoarding().click({ force: true })
      cy.get('button').contains('Create Grooming').first().click()
      boarding.getPetOwner().click({ force: true }).type("Elon musk")
      cy.wait(1000)
      boarding.getSelectPetOwner().click({ force: true })
      boarding.getFocusArrivedDate().eq(0).focus({ force: true }).type(dayjs().format('YYYY-MM-DDT11:00'))
      // boarding.getArrivedDate().type(dayjs().format('YYYY-MM-DDT11:00'))
      boarding.getFocusArrivedDate().eq(1).focus({ force: true }).type(dayjs().add(1, 'day').format('YYYY-MM-DDT14:00'))
      boarding.getSearchPet().click({ force: true }).type('E dog')
      boarding.getPetSelect().click({ force: true })
      cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[4]/div/div[2]/div[3]/button').first().focus({ force: true }).click({ force: true })
      cy.get(':nth-child(2) > :nth-child(1)').contains('Automation')
      let y = 2
      for (let x = 2; x <= 7; x++) {
        cy.get(`tbody > :nth-child(${y}) > :nth-child(${x})`).click({ multiple: true, force: true })
      }
      cy.get('.MuiDialogActions-root > .MuiButtonBase-root').focus()
      cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.flex > div > .MuiButtonBase-root').focus()
      cy.get('.flex > div > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.MuiPaper-root').contains('per pet').click()
      cy.get('[style="display: flex; justify-content: flex-end; margin-right: 23px;"] > .MuiButtonBase-root').eq(0).focus()
      cy.get('[style="display: flex; justify-content: flex-end; margin-right: 23px;"] > .MuiButtonBase-root > .MuiButton-label').click()
      cy.get('.MuiTypography-h6').should(($div) => {
        const className = $div[0].innerText
        console.log(className, "Harisssss");
        expect(className).to.match(/Billing Summary/)
      })
      cy.get('.MuiButton-contained').eq(0).focus()
      cy.get('.MuiButton-contained > .MuiButton-label').click()
    })




    it('Checking-in Reservation', () => {
      const boarding = new Boarding()
      boarding.openReservation().click({ force: true })
      boarding.getBoardingScreen().click({ force: true })
      cy.wait(2000)
      cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').type('Elon Musk').type('{enter}')
      cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true, multiple: true })
      cy.get('.MuiList-root > :nth-child(4)').click({ force: true, multiple: true })
      cy.get('.MuiAlert-message').should(($div) => {
        const className = $div[0].innerText
        console.log(className, "Harisssss");
        expect(className).to.match(/Check in successfull/)
      })
      // cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').clear().type('Elon Musk').type('{enter}')
    })

    it('Checking-out Reservation', () => {
      const boarding = new Boarding()
      boarding.openReservation().click({ force: true })
      boarding.getBoardingScreen().click({ force: true })
      cy.wait(2000)
      cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').type('Elon Musk').type('{enter}')
      cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({ force: true, multiple: true })
      cy.get('.MuiList-root > :nth-child(3)').click({ force: true, multiple: true })
      cy.get('.MuiAlert-message').should(($div) => {
        const className = $div[0].innerText
        console.log(className, "Harisssss");
        expect(className).to.match(/Check out successfull/)
      })
      // cy.get('.jss965 > .MuiInputBase-root > .MuiInputBase-input').clear().type('Elon Musk').type('{enter}')
    })



  })








