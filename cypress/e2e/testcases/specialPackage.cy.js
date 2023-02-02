/// <reference types="Cypress" />
const dayjs = require('dayjs')
import Special from '../pageObject/specialPackage'

describe("Specal package",{
    retries: {
        runMode: 2,
        openMode: 1,
    },
},  () => {
    beforeEach(() => {
        // cy.wait(2000)
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Special Package reservation', () => {
        const special = new Special()
        special.openReservation().click({force:true})
        special.getSpecialPackage().click({force:true})
        cy.wait(10000)
        // special.getCreateBtn().click({force:true})
        cy.get('button').contains('Create Grooming').first().click()
        special.getPetOwner().click({force:true}).type('Elon musk')
        special.getSelectPet().click({force:true})
        special.getNextCta().click({force:true})
        special.getArrivalDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT11:00'))
        special.getDepartureDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT14:00'))
        special.getPetList().check({force:true})
        special.getPackage().click({force:true})
        special.getSelectPackage().click({force:true})
        special.getCreateReservation().click({force:true})
        special.getFinishBtn().click({force:true})
    })

    it('Cancel special Package reservation',()=>{
        const special = new Special()
        special.openReservation().click({force:true})
        special.getSpecialPackage().click({force:true})
        special.getActionBtn().click({force:true,multiple:true})
        special.getCancelBooking().click({force:true,multiple:true})
        special.getConfirmCancelBooking().click({force:true})
        cy.wait(3000)
    })

    it('Special Package reservation', () => {
        const special = new Special()
        special.openReservation().click({force:true})
        special.getSpecialPackage().click({force:true})
        cy.wait(5000)
        // special.getCreateBtn().click({force:true})
        cy.get('button').contains('Create Grooming').first().click()
        special.getPetOwner().click({force:true}).type('Elon musk')
        special.getSelectPet().click({force:true})
        special.getNextCta().click({force:true})
        special.getArrivalDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT11:00'))
        special.getDepartureDate().click({force:true}).type(dayjs().format('YYYY-MM-DDT14:00'))
        special.getPetList().check({force:true})
        special.getPackage().click({force:true})
        special.getSelectPackage().click({force:true})
        special.getCreateReservation().click({force:true})
        special.getFinishBtn().click({force:true})
    })

    it('Check-in Special reservation',()=>{
        const special = new Special()
        special.openReservation().click({force:true})
        special.getSpecialPackage().click({force:true})
        special.getActionBtn().click({force:true,multiple:true})
        special.getCheckin().click({force:true,multiple:true})
        cy.wait(3000)
    })

    it('Check-out Special reservation',()=>{
        const special = new Special()
        special.openReservation().click({force:true})
        special.getSpecialPackage().click({force:true})
        special.getActionBtn().click({force:true,multiple:true})
        special.getCheckOut().click({force:true,multiple:true})
        cy.wait(3000)
    })

})