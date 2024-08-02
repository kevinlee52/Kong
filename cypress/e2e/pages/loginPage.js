//login.js
import CommonPage from "./commonPage";
export default class LoginPage extends CommonPage {
  constructor() {
    super();
    // this.userNameLocator = "input[name=username]";
    // this.passwordLocator = "input[name=password]";
    // this.formLocator = "form";
    this.url = "http://localhost:8002/login";
  }
  //   get username() {
  //     return cy.get(this.userNameLocator);
  //   }
  //   get password() {
  //     return cy.get(this.passwordLocator);
  //   }
  //   get form() {
  //     return cy.get(this.formLocator);
  //   }

  login(userName, passWord) {
    // this.username.type(userName);
    // this.password.type(passWord);
    // this.form.submit();
  }
}
