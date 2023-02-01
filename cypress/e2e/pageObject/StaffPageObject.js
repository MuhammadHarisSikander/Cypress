/// <reference types="Cypress" />

let data;

class staffPageObject {
  getStaffLinkElem() {
    return cy.xpath("//a[@href='/staff']");
  }
  getCreatStaffBtn() {
    return cy.get(".MuiButton-label");
  }
  getFullNameTxtElem() {
    return cy.get(
      "form > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getEmailAddressTxtElem() {
    return cy.get(
      ":nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getNumberTxtElem() {
    return cy.get(":nth-child(4) > .form-control");
  }
  getDesignationTxtElem() {
    return cy.get('input[name="desig"]');
  }
  getAddressTxtElem() {
    return cy.get(
      ":nth-child(9) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getEmergencyNameTxtElem() {
    return cy.get(
      ":nth-child(10) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getEmergencyNumberTxtElem() {
    return cy.get(":nth-child(12) > .form-control");
  }
  getEmergencyTypeTxtElem() {
    return cy.get(
      ":nth-child(14) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getHireDateElem() {
    return cy.get(
      "form > :nth-child(7) > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getCreateContainerBtnElem() {
    return cy.get(".MuiDialogActions-root > :nth-child(2)");
  }
  getCreateBtnElem() {
    return cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label");
  }
  getAddImageBtnElem() {
    return cy.get(".flex > .MuiButtonBase-root > .MuiButton-label");
  }
  getSearchTxtElem() {
    return cy.xpath(
      '//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div[3]/div[2]/div[1]/div[1]/div/input'
    );
  }
  getFirstRowElem() {
    return cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(1)");
  }

  createStaff(user) {
    data = user
    this.getStaffLinkElem().click();
    this.getCreatStaffBtn().eq(0).click();
    this.getFullNameTxtElem().eq(0).type(user.staffName);
    this.getEmailAddressTxtElem().type(user.emailAddress);
    this.getNumberTxtElem().eq(0).type(user.staffContactNumber);
    this.getDesignationTxtElem().eq(0).type("Staff");
    this.getHireDateElem().type(user.date);
    this.getAddressTxtElem().type(user.address);
    this.getEmergencyNameTxtElem().type(user.contactName);
    this.getEmergencyNumberTxtElem().type(user.emergencyNumber);
    this.getEmergencyTypeTxtElem().type("Relative");
    this.getCreateContainerBtnElem().focus();
    this.getCreateBtnElem().click();
    cy.wait(2000);
  }
  async verifyReflection() {
    let text;
    this.getSearchTxtElem().type(data.staffName).type("{enter}");
    cy.wait(1000);
    return new Promise((res, rej) => {
      cy.get(".MuiTableBody-root > .MuiTableRow-root > :nth-child(1)").then(
        ($val) => {
          text = $val.text();
          res(text);
        }
      );
    });
  }
}
export default staffPageObject;
