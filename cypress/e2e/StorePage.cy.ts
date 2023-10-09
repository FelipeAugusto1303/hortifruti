describe("Store page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/hortifruti/");
  });
  it("Should renders", () => {
    cy.get("img[alt='logo']").should("exist");
  });

  it("Should search an item", () => {
    cy.get("[data-testid='search-field']").type("abacat");

    cy.contains("Abacate - kg").should("exist");
  });

  it("Should request login", () => {
    cy.get("button[data-testid='add-item-button']").first().click();

    cy.contains("Realize o login na plataforma").should("exist");
  });

  it("Should login after request", () => {
    cy.get("button[data-testid='add-item-button']").first().click();

    cy.contains("Realize o login na plataforma").should("exist");

    cy.get("button[data-testid='dialog-login']").click();
    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");
  });

  it("Should add and remove an item", () => {
    cy.get("button[data-testid='add-item-button']").first().click();

    cy.contains("Realize o login na plataforma").should("exist");

    cy.get("button[data-testid='dialog-login']").click();
    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");

    cy.get("button[data-testid='add-item-button']").first().click();
    cy.contains("1").should("be.visible");

    cy.get("button[data-testid='item-remove']").click();
    cy.contains("1").should("not.visible");
  });

  it("Should go to cart page", () => {
    cy.get("button[data-testid='add-item-button']").first().click();

    cy.contains("Realize o login na plataforma").should("exist");

    cy.get("button[data-testid='dialog-login']").click();
    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");

    cy.get("button[data-testid='add-item-button']").first().click();
    cy.contains("1").should("be.visible");

    cy.get("[data-testid='cart-button']").click();

    cy.contains("Finalizar Compra").should("be.visible");
  });

  it("Should login and logout", () => {
    cy.get("[data-testid='login']").click();
    cy.contains("Email").should("be.visible");

    cy.get("[id='email']").type("felipe.augusto.1303@gmail.com");
    cy.get("[id='password']").type("felipe1303");
    cy.get("button[data-testid='login-button']").click();

    cy.wait(5000);

    cy.contains("Olá, Felipe Augusto Souza Guimarães").should("be.visible");

    cy.get("[data-testid='logout']").click();
    cy.contains("Entrar").should("be.visible");
  });
});
