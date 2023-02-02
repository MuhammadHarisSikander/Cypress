/// <reference types="Cypress" />
const dayjs = require('dayjs')
import WaterPark from '../pageObject/waterPark'

describe("Water Park Reservation",{
    retries: {
        runMode: 2,
        openMode: 1,
    },
},  () => {
    beforeEach(() => {
        // cy.wait(2000)
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Water park reservation', () => {
        const waterPark = new WaterPark()
        waterPark.openReservation().click({force:true})
        waterPark.getWaterPark().click({force:true})
        cy.wait(9000)
        // waterPark.getCreateBtn().click({force:true})
        cy.get('button').contains('Create Grooming').first().click()
        waterPark.getPetOwner().click({force:true}).type('Elon musk')
        waterPark.getSelectPet().click({force:true})
        waterPark.getNextCta().click({force:true})
        waterPark.getArrivalDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT11:00'))
        waterPark.getPetList().first().check({force:true})
        waterPark.getPetPackage().first().check({force:true})
        waterPark.getCreateReservation().click({force:true})
        waterPark.getFinishBtn().click({force:true})
    })

    it('Cancel Water park reservation',()=>{
        const waterPark = new WaterPark()
        waterPark.openReservation().click({force:true})
        waterPark.getWaterPark().click({force:true})
        waterPark.getActionBtn().click({force:true,multiple:true})
        waterPark.getCancelBooking().click({force:true,multiple:true})
        waterPark.getConfirmCancelBooking().click({force:true})
        cy.wait(3000)
    })

    it('Water park reservation', () => {
        const waterPark = new WaterPark()
        waterPark.openReservation().click({force:true})
        waterPark.getWaterPark().click({force:true})
        cy.wait(9000)
        // waterPark.getCreateBtn().click({force:true})
        cy.get('button').contains('Create Grooming').first().click()
        waterPark.getPetOwner().click({force:true}).type('Elon musk')
        waterPark.getSelectPet().click({force:true})
        waterPark.getNextCta().click({force:true})
        waterPark.getArrivalDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT11:00'))
        waterPark.getPetList().first().check({force:true})
        waterPark.getPetPackage().first().check({force:true})
        waterPark.getCreateReservation().click({force:true})
        waterPark.getFinishBtn().click({force:true})
    })

    it('Check-in Water park reservation',()=>{
        const waterPark = new WaterPark()
        waterPark.openReservation().click({force:true})
        waterPark.getWaterPark().click({force:true})
        waterPark.getActionBtn().click({force:true,multiple:true})
        waterPark.getCheckin().click({force:true,multiple:true})
        cy.wait(3000)
    })

    it('Check-out Water park reservation',()=>{
        const waterPark = new WaterPark()
        waterPark.openReservation().click({force:true})
        waterPark.getWaterPark().click({force:true})
        waterPark.getActionBtn().click({force:true,multiple:true})
        waterPark.getCheckOut().click({force:true,multiple:true})
        cy.wait(3000)
    })
})