describe("gateway service actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8002/");
  });

  it("create a mock service", () => {
    cy.get(".workspace-name").contains("default").click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-gateway-services"]').click();
    cy.get('[data-testid="new-gateway-service"]').click();
    // cy.get('[data-testid="toolbar-add-gateway-service"]').click();
    cy.get('[data-testid="gateway-service-name-input"]').type("mock_service");
    cy.get('[data-testid="gateway-service-url-input"]').type(
      "http://httpbin.org"
    );
    cy.get('[data-testid="form-submit"]').click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-gateway-services"]').click();
    cy.get('tbody > [data-testid="mock_service"]').should(($ms) => {
      expect($ms.first()).to.contain("mock_service");
    });
  });

  it("create a route for the mock service", () => {
    cy.get(".workspace-name").contains("default").click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-gateway-services"]').click();
    cy.get('tbody > [data-testid="mock_service"]').click();
    cy.get(".alert-message > .k-button").click();
    cy.get('[data-testid="route-form-name"]').type("mock_route");
    cy.get('[data-testid="route-form-paths-input-1"]').type("/mock_route");
    cy.get('[data-testid="form-submit"]').click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-routes"]').click();
    cy.get('tbody > [data-testid="mock_route"]').should(($mr) => {
      expect($mr.first()).to.contain("mock_route");
    });
  });

  it("delete the mock route", () => {
    cy.get(".workspace-name").contains("default").click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-routes"]').click();
    cy.get('tr[data-testid="mock_route"]').click();
    cy.get('[data-testid="header-actions"]').click();
    cy.get(
      '.danger > [data-testid="dropdown-item-trigger"] > .dropdown-item-trigger-label'
    ).click();
    cy.get('[data-testid="confirmation-input"]').type("mock_route");
    cy.get('[data-testid="modal-action-button"]').click();
  });

  it("delete the mock service", () => {
    cy.get(".workspace-name").contains("default").click();
    cy.get(".sidebar-menu-toggle").click();
    cy.get('[data-testid="sidebar-item-gateway-services"]').click();
    cy.get('div[data-testid="mock_service"]').click();
    cy.get(
      'div[data-testid="mock_service"] > .k-dropdown > [data-testid="k-dropdown-popover"]   .k-popover-content > ul > li[data-testid="action-entity-delete"]'
    ).click();
    cy.get('[data-testid="confirmation-input"]').type("mock_service");
    cy.get('[data-testid="modal-action-button"]').click();
  });
});
