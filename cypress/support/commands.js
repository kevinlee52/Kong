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

Cypress.Commands.add("navToDefaultWorkspace", () => {
  cy.visit("http://localhost:8002/");
  cy.get(".workspace-name").contains("default").click();
});

Cypress.Commands.add("navToServicesPage", () => {
  cy.get(".sidebar-menu-toggle").click();
  cy.get('[data-testid="sidebar-item-gateway-services"]').click();
});

Cypress.Commands.add("navToRoutePage", () => {
  cy.get(".sidebar-menu-toggle").click();
  cy.get('[data-testid="sidebar-item-routes"]').click();
});

Cypress.Commands.add("addNewService", (name, url) => {
  cy.get('[data-testid="new-gateway-service"]').click();
  // cy.get('[data-testid="toolbar-add-gateway-service"]').click();
  cy.get('[data-testid="gateway-service-name-input"]').type(name);
  cy.get('[data-testid="gateway-service-url-input"]').type(url);
  cy.get('[data-testid="form-submit"]').click();
});

Cypress.Commands.add("validateServiceCreation", (serviceName) => {
  cy.get(`tbody > [data-testid=${serviceName}]`).should(($ms) => {
    expect($ms.first()).to.contain(serviceName);
  });
});

Cypress.Commands.add(
  "addRouteToService",
  (serviceName, routeName, routePath) => {
    cy.get(`tbody > [data-testid=${serviceName}]`).click();
    cy.get(".alert-message > .k-button").click();
    cy.get('[data-testid="route-form-name"]').type(routeName);
    cy.get('[data-testid="route-form-paths-input-1"]').type(routePath);
    cy.get('[data-testid="form-submit"]').click();
  }
);

Cypress.Commands.add("validateRouteCreation", (routeName) => {
  cy.get(`tbody > [data-testid=${routeName}]`).should(($mr) => {
    expect($mr.first()).to.contain(routeName);
  });
});

Cypress.Commands.add("deleteRoute", (routeName) => {
  cy.get(`tr[data-testid=${routeName}]`).click();
  cy.get('[data-testid="header-actions"]').click();
  cy.get(
    '.danger > [data-testid="dropdown-item-trigger"] > .dropdown-item-trigger-label'
  ).click();
  cy.get('[data-testid="confirmation-input"]').type(routeName);
  cy.get('[data-testid="modal-action-button"]').click();
});

Cypress.Commands.add("deleteService", (serviceName) => {
  cy.get(`div[data-testid=${serviceName}]`).click();
  cy.get(
    'div[data-testid="mock_service"] > .k-dropdown > [data-testid="k-dropdown-popover"]   .k-popover-content > ul > li[data-testid="action-entity-delete"]'
  ).click();
  cy.get('[data-testid="confirmation-input"]').type(serviceName);
  cy.get('[data-testid="modal-action-button"]').click();
});
