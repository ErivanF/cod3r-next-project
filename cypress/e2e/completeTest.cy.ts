const baseUrl = "http://localhost:3000/";
describe("End to end testing", () => {
  it("should be able to create an user", () => {
    cy.visit(baseUrl);
    cy.get("button").contains("Criar usuário").click();
    cy.get('[data-testid="NameInput"]').type("UserTestName");
    cy.get('[data-testid="AgeInput"]').type("24601"); //Be sure to not have a user with this age
    cy.get("button").contains("Registrar").click();
    cy.contains("UserTestName").should("exist");
    cy.contains("24601").should("exist");
  });
  it("should be able to modify a user", () => {
    cy.visit(baseUrl);
    cy.get('[data-testid="userCard"]')
      .contains("UserTestName")
      .get('[data-testid="editUser"]')
      .click();
    cy.get('[data-testid="NameInput"]').clear().type("UserTestNameUpdated");
    cy.get("button").contains("Atualizar").click();
    cy.contains("UserTestNameUpdated").should("exist");
  });
  it("should be able to delete a user", () => {
    cy.visit(baseUrl);
    cy.get('[data-testid="userCard"]')
      .contains("UserTestNameUpdated")
      .get('[data-testid="deleteUser"]')
      .click();
    cy.contains("UserTestNameUpdated").should("not.exist");
  });
});
