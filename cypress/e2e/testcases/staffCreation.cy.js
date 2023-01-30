/// <reference types="Cypress" />
import staffCreate from "../pageObject/StaffPageObject";
import { faker } from "@faker-js/faker";
const dayjs = require("dayjs");

// variables

let txt;
faker.locale = "en";
var name = faker.name.firstName() + " " + faker.name.lastName();

//User data object
let user = {
  staffName: name.replace(/[^\w\s]/gi, ""),
  contactName: (faker.name.firstName() + " " + faker.name.lastName()).replace(
    /[^\w\s]/gi,
    ""
  ),
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

describe("Create a Staff", function () {
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
    async function () {
      let StaffCreate = new staffCreate();
      StaffCreate.createStaff(user);
      txt = await StaffCreate.verifyReflection();
      expect(txt).to.be.equal("R" + name);
    }
  );
});
