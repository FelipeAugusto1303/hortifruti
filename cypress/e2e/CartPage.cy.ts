describe("Cart page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/hortifruti/");

    cy.get("[data-testid='login']").click();
    cy.contains("Email").should("be.visible");

    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");

    cy.get("button[data-testid='add-item-button']").first().click();

    cy.get("[data-testid='cart-button']").click();
  });
  it("Should renders", () => {
    cy.contains("Finalizar Compra").should("be.visible");
  });
  it("Should have the selected product", () => {
    cy.contains("Abacate - kg").should("be.visible");
  });
  it("Should have the total price correctly", () => {
    cy.contains("Total: R$24.00");
  });
  it("Should go to main page", () => {
    cy.get("[data-testid='go-to-store']").click();
    cy.url().should("eq", "http://localhost:5173/hortifruti/");
  });
  it("Should go to checkout", () => {
    cy.get("[data-testid='go-to-checkout']").click();
    cy.url().should("eq", "http://localhost:5173/hortifruti/checkout");
  });
});
