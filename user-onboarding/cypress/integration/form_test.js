/// <reference types="Cypress" />
/*global cy */

describe("Testing Inputs For Form", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("Fills In Form Inputs", function () {
    cy.get('[cy-data="name"')
      .type("Nathaniel Richards")
      .should("have.value", "Nathaniel Richards");
    cy.get('[cy-data="email"')
      .type("legendarycomedy1@gmail.com")
      .should("have.value", "legendarycomedy1@gmail.com");
    cy.get('[cy-data="password"')
      .type("Noble15!!")
      .should("have.value", "Noble15!!");
    cy.get('[cy-data="terms"]').check().should("be.checked");
    cy.get('[cy-data="submit"]').click();
  });
});

describe("Testing Form For Validation", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("Attempts to submit with empty inputs", function () {
    cy.get('[cy-data="name"')
      .type("Nathaniel Richards")
      .should("have.value", "Nathaniel Richards");
    cy.get('[cy-data="email"')
      .type("legendarycomedy1@gmail.com")
      .should("have.value", "legendarycomedy1@gmail.com");
    cy.get('[cy-data="terms"]').check().should("be.checked");
    cy.get('[cy-data="submit"]').should("be.disabled");
  });
});
