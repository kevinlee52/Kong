// <reference types="cypress" />
import LoginPage from "./pages/loginPage";
import workspacePage from "./pages/workspacePage";
describe("login actions", function () {
  // const username = "username";
  // const password = "password";
  it("login test", function () {
    const loginInstance = new LoginPage();
    loginInstance.visitPage();
    // loginInstance.login(username, password)
    cy.url().should("include", "/login");
    const mainInstance = new workspacePage();
    mainInstance.visitPage();
    mainInstance.titleText.should(($ms) => {
      expect($ms.first()).to.contain("Workspaces");
    });
  });
});
