/// <reference types="Cypress" />

let data;
class petOwnerPageObject {
  getOwnerLinkElem() {
    return cy.xpath("//a[@href='/owner']");
  }
  getOwnerBtnContainerElem() {
    return cy.get('[style="margin-left: 20px;"]');
  }
  getOwnerBtnElem() {
    return cy.get(".MuiButton-label");
  }
  getFirstNameTxtElem() {
    return cy.get(
      "form > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getLastNameTxtElem() {
    return cy.get(
      "form > :nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getNumberTxtElem() {
    return cy.get(".form-control");
  }
  getEmailAddressTxtElem() {
    return cy.get(
      ":nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input"
    );
  }
  getPasswordTxtElem() {
    return cy.get("#po_password");
  }
  getLocationDropDownElem() {
    return cy.get(":nth-child(6) > .MuiInputBase-root > .MuiSelect-root");
  }
  getLocationDropDownItemsElem() {
    return cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]');
  }
  getCreateContainerElem() {
    return cy.get('#menu- > .MuiPaper-root > .MuiList-root > [tabindex="0"]');
  }
  getCreateBtnElem() {
    return cy.get(".MuiDialogActions-root > :nth-child(2) > .MuiButton-label");
  }
  getSearchTxtElem() {
    return cy.xpath('//*[@id="fuse-layout"]/div/div/div[2]/div/div[3]/div/div[2]/div[1]/div/input')
  }
  getFirstRowElem() {
    return cy.get(".MuiTableBody-root > :nth-child(1) > :nth-child(2)");
  }

  createPetOwner(user) {
    data = user;
    this.getOwnerLinkElem().click();
    this.getOwnerBtnContainerElem().focus();
    this.getOwnerBtnElem().eq(1).click();
    this.getFirstNameTxtElem().type(user.ownerFName);
    this.getLastNameTxtElem().type(user.ownerLName);
    this.getNumberTxtElem().type(user.ownerContactNumber);
    this.getEmailAddressTxtElem().type(user.emailAddress);
    this.getPasswordTxtElem().type(user.password);
    this.getLocationDropDownElem().click();
    this.getLocationDropDownItemsElem().focus().click();
    this.getCreateContainerElem().focus();
    this.getCreateBtnElem().click();
    cy.wait(2000);
  }
  async verifyReflection() {
    let text;
    cy.log(data)
    this.getSearchTxtElem()
      .type(data.ownerFName)
      .type("{enter}")
    cy.wait(1000);
    return new Promise((res, rej) => {
      this.getFirstRowElem().then(($val) => {
        text = $val.text();
        res(text);
      });
    });
  }
}
export default petOwnerPageObject;
