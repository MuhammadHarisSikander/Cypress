/// <reference types="Cypress" />
import staffCreate from "../pageObject/StaffPageObject";

import { faker } from "@faker-js/faker";

const dayjs = require("dayjs");

// variables
faker.locale = "en";
var name = faker.name.firstName() + " " + faker.name.lastName();

//User data object
let user = {
  staffName: name,
  contactName: faker.name.firstName() + " " + faker.name.lastName(),
  emailAddress: faker.internet.email(
    name.split(" ")[0],
    name.split(" ")[1],
    "mailinator.com"
  ),
  staffContactNumber: faker.phone.number(),
  emergencyNumber: faker.phone.number(),
  date: dayjs().format("YYYY-MM-DD"),
  address: faker.address.streetAddress(true),
};

describe("Create a Staff", () => {
  beforeEach(() => {
    cy.Login();
  });
  it(
    "Staff creation Smoke test",
    {
      retries: {
        runMode: 1,
        openMode: 1,
      },
    },
    () => {
      let StaffCreate = new staffCreate();
      StaffCreate.createStaff(user);
      StaffCreate.verifyReflection().then((result) => {
        //Assertion
        expect(result).to.equal("R" + name);
      });
    }
  );
});
