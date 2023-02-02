/// <reference types="Cypress" />
const dayjs = require('dayjs')
import Daycare from "../pageObject/Daycare"
describe('Daycare', () => {
    beforeEach(() => {
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Daycare reservation Smoke test',  {
        retries: {
          runMode: 2,
          openMode: 1,
        },
      }, () => {
        const daycare = new Daycare()
        daycare.openReservation().click()
        daycare.getDaycareScreen().click()
        cy.wait(9000)
        // daycare.getDaycareCreateBtn().click()
        cy.get('button').contains('Create Grooming').first().click()
        cy.wait(5000)
        daycare.getPetOwnerName().type('Elon musk')
        cy.wait(5000)
        daycare.getSelectPo().click()
        daycare.getNextCta().click()
        const now = new Date(Date.UTC(2017, 2, 14)).getTime()
        cy.clock(now)
        // cy.get('.MuiInputBase-input MuiOutlinedInput-input').click()
        cy.get(':nth-child(1) > [style="padding: 8px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type(dayjs().format('YYYY-MM-DDT11:00'))
        cy.get(':nth-child(2) > [style="padding: 8px;"] > .MuiTextField-root > .MuiInputBase-root > .MuiInputBase-input').type(dayjs().format('YYYY-MM-DDT14:00'))
        cy.wait(5000)
        // console.log('>>>>>>>>>',daycare.getPetList())
        daycare.getPetList().check()
        cy.get('.flex > div > .MuiButtonBase-root > .MuiButton-label').click({force:true}).children()
        cy.contains('Bath').click()
        cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/button').click({force:true})
        cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[2]/div[2]/div[2]/div/button[2]/span[1]').click()

      })

      it("Edit daycare reservation before check in",()=>{
              const daycare = new Daycare()
              daycare.openReservation().click()
              daycare.getDaycareScreen().click()
              cy.wait(10000)
              cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({multiple:true,force:true})
              cy.get('.MuiList-root > :nth-child(2)').click({multiple:true,force:true})
              cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > div > .MuiButtonBase-root').click({multiple:true,force:true})
              cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > .MuiButtonBase-root').click({multiple:true,force:true})
      })

      it("Check in Pet",()=>{
        const daycare = new Daycare()
        daycare.openReservation().click()
        daycare.getDaycareScreen().click()
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({multiple:true,force:true})
        cy.get('.MuiList-root > :nth-child(4)').click({multiple:true,force:true})
        cy.wait(5000)
      })

      it("Edit Checked in Pet",()=>{
        const daycare = new Daycare()
        daycare.openReservation().click()
        daycare.getDaycareScreen().click()
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({multiple:true,force:true})
        cy.get('.MuiList-root > :nth-child(2)').click({multiple:true,force:true})
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px;"] > div > .MuiButtonBase-root').click({multiple:true,force:true})
        cy.get('[style="display: flex; justify-content: flex-end; padding: 10px; margin-top: 5%; margin-bottom: 2%;"] > .MuiButtonBase-root').click({multiple:true,force:true})
      })
      it("Check-out Pet",()=>{
        const daycare = new Daycare()
        daycare.openReservation().click()
        daycare.getDaycareScreen().click()
        cy.wait(10000)
        cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click({multiple:true,force:true})
        cy.get('.MuiList-root > :nth-child(3)').click({multiple:true,force:true})
        cy.wait(5000)
        // cy.get('.MuiList-root > :nth-child(3)')
 })
      
    //   it("Cancel reservaion",()=>{
    //     const daycare = new Daycare()
    //     daycare.openReservation().click()
    //     daycare.getDaycareScreen().click()
    //     cy.get(':nth-child(1) > :nth-child(1) > .MuiButtonBase-root').click()
    //   cy.get('.MuiList-root > :nth-child(3)').click()
    //   cy.get('[style="position: fixed; z-index: 1300; inset: 0px;"] > .MuiDialog-container > .MuiPaper-root > .MuiDialogActions-root > .MuiButton-textPrimary > .MuiButton-label').click()
    // })



})
    //    npx cypress run --record --key=4b54f2ec-7fd5-4c66-a930-cf9ffacc8b8e