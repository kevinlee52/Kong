//commonPage.js
export default class CommonPage {
  constructor() {}
  visitPage() {
    cy.visit(this.url);
  }
}
