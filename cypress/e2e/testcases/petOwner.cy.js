/// <reference types="Cypress" />
import PetOwner from "../pageObject/petOwnerPageObject";
import { faker } from "@faker-js/faker";
// variables

let result;
faker.locale = "en";
var firstName = faker.name.firstName().replace(/[^\w\s]/gi, "");
var lastName = faker.name.lastName().replace( /[^\w\s]/gi,"");

//User data object
let user = {
  ownerFName:firstName,
  ownerLName:lastName,
  emailAddress: faker.internet.email(
    firstName,
    lastName,
    "mailinator.com"
  ),
  ownerContactNumber: faker.phone.number(),
  password: faker.internet.password(10, false, /\w/, '!Aa0')
};

describe("Create a Staff", ()=> {
  beforeEach(() => {
    cy.Login();
  });
  it(
    "Staff creation Smoke test",
    {
      retries: {
        runMode: 2,
        openMode: 1,
      },
    },
    async()=> {
      let petCreate = new PetOwner();
      petCreate.createPetOwner(user);
      result = await petCreate.verifyReflection();
      const name = user.ownerFName+" "+user.ownerLName;
      expect(result).to.be.equal(name);
    }
  );
});


