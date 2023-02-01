/// <reference types="Cypress" />
const dayjs = require('dayjs')
// import { first } from 'cypress/types/lodash'
import Boarding from '../pageObject/boarding'

describe("Boarding", {
    retries: {
      runMode: 2,
      openMode: 1,
    },
  }, () => {
    beforeEach(()=>{
        cy.Login('stagging.admin@yopmail.com', 'jQq0CRHn')
    })
    it('Create a Boarding reservation', () => {
        const boarding = new Boarding()
        boarding.openReservation().click({force:true})
        boarding.getBoardingScreen().click({force:true})
        cy.wait(2000)
        boarding.getCreateBoarding().click({force:true})
        boarding.getPetOwner().click({force:true}).type("Elon musk")
        cy.wait(1000)
        boarding.getSelectPetOwner().click({force:true})
        boarding.getFocusArrivedDate().first().focus({force:true})
        boarding.getArrivedDate().type(dayjs().format('YYYY-MM-DDT11:00'))
        boarding.getFocusArrivedDate().eq(1).focus({force:true}).type(dayjs().add(1,'day').format('YYYY-MM-DDT14:00'))
        // boarding.getDepartureDate()
        boarding.getSearchPet().click({force:true}).type('E dog')
        boarding.getPetSelect().click({force:true})
        cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[2]/div/div[2]').focus({force:true})
        boarding.getSelectRoom().click({force:true})
        // boarding.getRoomOne().click({force:true})
        // boarding.getRoomTwo().click({force:true})
        // boarding.getRoomDoneBtn().click({force:true})
        // boarding.getAddService().click({force:true})
        // boarding.getAddonService().click({force:true})
        // boarding.getNextBtn().click({force:true})
        // boarding.getFinishBtn().click({force:true,multiple:true})

        // cy.get('table tr td').then((cells) => {
        //     const randomIndex = Math.floor(Math.random() * cells.length);
        //     const randomCell = cells[randomIndex];
        //     cy.wrap(randomCell).click().click().should('have.css',['rgb(215, 215, 215)',pointer']);
        //     // cy.wrap(randomCell).click().should('have.css','pointer');
        // });

        // cy.get('table tr').should('have.css','pointer').click()
        // cy.wait(1000)
        // let retries = 0;
        // cy.get('table tr td',{timeout:10000}).then(($elem)=>{
        //     console.log('>>>>>>>>>>>>>>>>>>>>>>>',$elem)
        //     $elem.filter((index,element)=>{
        //         cy.get(element).should('not.have.css','not-allowed').click()
        //         // return console.log("Test>>>>>",element.style.cursor == 'pointer');
        //     })
        // })
        // cy.get('table tr td').filter('not.have.css','not-allowed').click({force:true,multiple:true})
        // cy.get('table tr td').should('be.enabled')
        // cy.wait(2000)
        // cy.get('table tr').each(($elem,$index) => {
        //     $elem.css("background-color","rgb(215, 215, 215)").trigger()

        //    console.log("Harisssss>>>",$elem[1].click()); 
        //    if($index == 1){
        //     return false;
        //    }
        //    cy.wrap($elem).click()
        // });


        // cy.get('.MuiDialogContent-root').each(($elem,$index) => {
        //     // console.log("Harisssss>>>",$elem[0].click()); 
        //     if($index == 3){
        //      return false;
        //     }
        //     cy.wrap($elem).click()
        //  });
        //  cy.get('table tr td').should('have.css','pointer').click({force:true}).should('have.css','rgb(215, 215, 215)')
        // cy.get('.MuiDialogContent-root').each(($elem,$index) => {
        //     // console.log("Harisssss>>>",$elem[0].click()); 
        //     if($index == 3){
        //      return false;
        //     }
        //     cy.wrap($elem).click()
        //  });

        // cy.get('.MuiDialogContent-root').each((element, index)=>{
        //     const randomNumber = Math.random();
        //     if (randomNumber > 0.5) {
        //         cy.wrap(element).click();
        //       }
        // })

    })

})


