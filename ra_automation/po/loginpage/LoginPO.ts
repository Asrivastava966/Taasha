import { element, by } from "protractor";

export class LoginPO{
  private static loginLogo = element(by.className('loginLogo'));
  private static usernameField = element(by.id('username'));
  private static passwordField = element(by.id('password'));
  private static loginButton = element(by.css('[type="submit"]'));

  getLoginLogo(){
    return LoginPO.loginLogo;
  }

  getUsernameField() {
    return LoginPO.usernameField;
  }

  getPasswordField(){
    return LoginPO.passwordField;
  }

  getLoginButton(){
    return LoginPO.loginButton;
  }
}