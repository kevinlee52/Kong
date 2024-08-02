describe("gateway service actions", () => {
  beforeEach(() => {
    cy.navToDefaultWorkspace();
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
    cy.get(".kong-ui-entities-routes-list").should(($mr) => {
      expect($mr.first()).to.not.contain("mock_route");
    });
  });

  it("delete the mock service", () => {
    cy.navToServicesPage();
    cy.deleteService("mock_service");
    cy.navToServicesPage();
    cy.get(".kong-ui-entities-gateway-services-list").should(($ms) => {
      expect($ms.first()).to.not.contain("mock_service");
    });
  });
});
