// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
cy.visit("/");
cy.setLocalStorage(
"michelesc@mail.com",
'{"name":"Michele SC","email":"michelesc@mail.com","password":"123456789","accountNumber":"96-3","balance":1000,"logged":true}'
);
cy.saveLocalStorage(
"michelesc@mail.com",
'{"name":"Michele SC","email":"michelesc@mail.com","password":"123456789","accountNumber":"96-3","balance":1000,"logged":true}'
);

cy.setLocalStorage(
"transaction:michelesc@mail.com",
'[{"id":"c2a158be-5ed1-410c-b22b-7e831ca1741e","date":"05/10/2022","type":"Abertura de conta","transferValue":1000,"description":"Saldo adicionado ao abrir conta"}]'
);

cy.saveLocalStorage(
"transaction:michelesc@mail.com",
'[{"id":"c2a158be-5ed1-410c-b22b-7e831ca1741e","date":"05/10/2022","type":"Abertura de conta","transferValue":1000,"description":"Saldo adicionado ao abrir conta"}]'
);

cy.setLocalStorage("undefined",
'[{"id":"c2a158be-5ed1-410c-b22b-7e831ca1741e","date":"05/10/2022","type":"Abertura de conta","transferValue":1000,"description":"Saldo adicionado ao abrir conta"}]'
);

cy.saveLocalStorage(
"undefined",
'[{"id":"c2a158be-5ed1-410c-b22b-7e831ca1741e","date":"05/10/2022","type":"Abertura de conta","transferValue":1000,"description":"Saldo adicionado ao abrir conta"}]'
);

cy.get(
".style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default"
).type("michelesc@mail.com");

cy.get(
".style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default"
).type("123456789");

cy.get(".otUnI").click();
cy.contains("Saldo em conta R$ 1.000,00").should("be.visible");

//Armazenamento de outro cliente
cy.setLocalStorage(
"andreateste@mail.com",
'{"name":"Andrea Test","email":"andreateste@mail.com","password":"23456","accountNumber":"993-1","balance":1000,"logged":true}');

});

import "cypress-localstorage-commands";