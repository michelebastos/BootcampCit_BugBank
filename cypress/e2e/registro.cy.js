describe("registro de cliente", () => {
  it("valida cadastro de cliente", () => {
    cy.visit("https://bugbank.netlify.app/");
    cy.get(
      'button[class="style__ContainerButton-sc-1wsixal-0 ihdmxA button__child"]'
    ).click();
    cy.get("input.input__default")
      .eq(2)
      .type("michelesc@mail.com", { force: true });
    cy.get("input.input__default").eq(3).type("Michele SC", { force: true });
    cy.get("input.input__default").eq(4).type("123456", { force: true });
    cy.get("input.input__default").eq(5).type("123456", { force: true });
    cy.get("button.style__ContainerButton-sc-1wsixal-0.CMabB.button__child")
      .eq(0)
      .click({ force: true });
    
    cy.get('[class="styles__Container-sc-1pngcbh-0 kIwoPV"]').click({force: true});
    cy.get("#modalText").should("be.visible");
    cy.get("#btnCloseModal").should("have.text", "Fechar");
    cy.get("#btnCloseModal").click();

  });

  it("valida acesso a conta", () => {
    cy.login();

    cy.get("#textName").should("have.text", "Olá Michele SC,");
    cy.get(".home__ContainerText-sc-1auj767-7 > :nth-child(2)").should(
      "have.text",
      "bem vindo ao BugBank :)"
    );
    cy.contains("TRANSFERÊNCIA").should("be.visible");
    cy.contains("PAGAMENTOS").should("be.visible");
    cy.contains("EXTRATO").should("be.visible");
    cy.contains("SAQUE").should("be.visible");
  });
});

describe("transações da conta corrente", () => {
  it("valida extrato da conta", () => {
    cy.login();
    cy.wait(200);
    cy.get("#btn-EXTRATO").click();
    cy.wait(100);
    cy.contains("Saldo disponível").should("be.visible");
    cy.get("#textDateTransaction").should("have.text", "05/10/2022");
    cy.get("#textTypeTransaction").should("have.text", "Abertura de conta");
    cy.get("#textDescription").should(
      "have.text",
      "Saldo adicionado ao abrir conta"
    );
    cy.get("#textTransferValue").should("be.visible");
  });
  it("valida transferencia de valores", () => {
    cy.login();

    cy.get("#btn-TRANSFERÊNCIA").click();
    cy.get('input[type="accountNumber"]').type("993");
    cy.get('input[type="digit"]').type("1");
    cy.get('input[type="transferValue"]').type("100");
    cy.get('input[type="description"').type(
      "Transferência no valor de 100 reais"
    );
    cy.contains("Transferir agora").click();
    cy.get("#btnCloseModal").click();
  });
});
