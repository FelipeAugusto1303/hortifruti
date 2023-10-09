describe("Register page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/hortifruti/register");
  });
  it("Should renders", () => {
    cy.contains("Nome Completo").should("be.visible");
    cy.contains("Email").should("be.visible");
    cy.contains("Senha").should("be.visible");
    cy.contains(
      "Cadastre seu email e senha para utilizar a plataforma da Hortifruti"
    ).should("be.visible");
    cy.get("img[alt='logo-image']").should("exist");
    cy.get("[data-testid='register-button'").should("exist");
    cy.get("[data-testid='go-login']").should("exist");
  });
  it("Should register", () => {
    cy.get("[id='name']").type("Felipe Augusto");
    cy.get("[id='email']").type("teste2@email.com");
    cy.get("[id='password']").type("teste123");

    cy.get("[data-testid='register-button'").click();

    cy.wait(5000);
    cy.contains(
      "Digite seu email e senha para utilizar a plataforma da Hortifruti"
    ).should("be.visible");
  });

  it("Should go to login", () => {
    cy.get("[data-testid='go-login']").click();
    cy.contains(
      "Digite seu email e senha para utilizar a plataforma da Hortifruti"
    ).should("be.visible");
  });
});
