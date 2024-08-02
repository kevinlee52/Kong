import CommonPage from "./commonPage";

export default class defaultWorkspacePage extends CommonPage {
  constructor() {
    super();
    this.titleLocator = ".title";
    this.url = "http://localhost:8002/default/overview";
  }
  get titleText() {
    return cy.get(this.titleLocator);
  }
}
