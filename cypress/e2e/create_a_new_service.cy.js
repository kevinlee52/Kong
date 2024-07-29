describe("create a new service", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8002/");
  });

  it("information", () => {
    cy.get(".title").contains("Workspaces");
  });

  it("test 2nd", () => {
    cy.get(".title").contains("Workspaces");
  });

  it("test 3rd", () => {
    cy.get(".title").contains("Workspaces");
  });

  // it.only("the features on the homepage are correct", () => {
  //   cy.get("dt")
  //     .eq(0)
  //     .contains(/4 courses/i)
  //   cy.get("dt").eq(1).contains("25+ Lessons")
  //   cy.get("dt")
  //     .eq(2)
  //     .contains(/free and open/i)
  // })
});
