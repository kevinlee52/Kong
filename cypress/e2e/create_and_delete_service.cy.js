import defaultWorkspacePage from "./pages/defaultWorkspacePage";

describe("gateway service actions", () => {
  beforeEach(() => {
    const instance = new defaultWorkspacePage();
    instance.visitPage();
  });

  it("create a mock service", () => {
    cy.navToServicesPage();
    cy.addNewService("mock_service", "http://httpbin.org");
    cy.navToServicesPage();
    cy.validateServiceCreation("mock_service");
  });

  it("create a route for the mock service", () => {
    cy.navToServicesPage();
    cy.addRouteToService("mock_service", "mock_route", "/mock_route");
    cy.navToRoutePage();
    cy.validateRouteCreation("mock_route");
  });

  it("delete the mock route", () => {
    cy.navToRoutePage();
    cy.deleteRoute("mock_route");
    cy.navToRoutePage();
    cy.validateRouteDeletion("mock_route");
  });

  it("delete the mock service", () => {
    cy.navToServicesPage();
    cy.deleteService("mock_service");
    cy.navToServicesPage();
    cy.validateServiceDeletion("mock_service");
  });
});
