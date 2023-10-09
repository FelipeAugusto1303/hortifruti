describe("LoginPage", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/hortifruti/login");
  });
  it("Should renders", () => {
    cy.contains("Email").should("be.visible");
  });

  it("Should login", () => {
    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");
  });

  it("Should go to Register page", () => {
    cy.get("[data-testid='go-register-page']").click();

    cy.contains("Nome Completo").should("be.visible");
  });

  it("Should go to Main page", () => {
    cy.get("[data-testid='go-main-page']").click();

    cy.contains("Entrar").should("be.visible");
  });
});
