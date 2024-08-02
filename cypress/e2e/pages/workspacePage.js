import CommonPage from "./commonPage";

export default class workspacePage extends CommonPage {
  constructor() {
    super();
    this.titleLocator = ".title";
    this.url = "http://localhost:8002/workspaces";
  }
  get titleText() {
    return cy.get(this.titleLocator);
  }
}
