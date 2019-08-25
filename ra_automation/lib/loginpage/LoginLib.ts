import { browser } from 'protractor';
import { LoginPO } from '../../po/LoginPage/LoginPO';
import { UserInfo } from '../../data/info/UserInfo';

export class LoginLib{
  loginPO:LoginPO;

  constructor(){
    this.loginPO = new LoginPO();
  }

  getLoginPO(){
    return this.loginPO;
  }

  private setBaseUserInfo() {
    let userInfo:UserInfo = new UserInfo();
    userInfo.setUserName(browser.params.login.username);
    userInfo.setPassword(browser.params.login.password);

    return userInfo;
  }

  private async performLogin(userInfo:UserInfo) {
    await this.getLoginPO().getUsernameField().sendKeys(userInfo.getUserName());
    await this.getLoginPO().getPasswordField().sendKeys(userInfo.getPassword());
    await this.getLoginPO().getLoginButton().click();
    browser.logger.info("Logging in...");
  }

  async login(userInfo:UserInfo) {
    await browser.get(browser.params.login.baseURL);  
    let sessionObject = await browser.driver.getSession();
    browser.logger.info("Opening the browser and navigating to the application url - " + browser.params.login.baseURL);
    browser.logger.info("User credentials: " + userInfo.getUserName() + ", " + userInfo.getPassword());
    browser.logger.info("Session ID = " + sessionObject.getId());

    await this.performLogin(userInfo);
  }

  async doBaseLogin(){
    return await this.login(this.setBaseUserInfo());
  }

  async loginInSameBrowserInstance(userInfo:UserInfo) {
    await this.performLogin(userInfo);
  }

  async doBaseLoginInSameBrowserInstance() {
    let userInfo:UserInfo = this.setBaseUserInfo();
    await this.performLogin(userInfo);
  }
}
