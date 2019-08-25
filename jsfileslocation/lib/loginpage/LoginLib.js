"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const LoginPO_1 = require("../../po/LoginPage/LoginPO");
const UserInfo_1 = require("../../data/info/UserInfo");
class LoginLib {
    constructor() {
        this.loginPO = new LoginPO_1.LoginPO();
    }
    getLoginPO() {
        return this.loginPO;
    }
    setBaseUserInfo() {
        let userInfo = new UserInfo_1.UserInfo();
        userInfo.setUserName(protractor_1.browser.params.login.username);
        userInfo.setPassword(protractor_1.browser.params.login.password);
        return userInfo;
    }
    performLogin(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getLoginPO().getUsernameField().sendKeys(userInfo.getUserName());
            yield this.getLoginPO().getPasswordField().sendKeys(userInfo.getPassword());
            yield this.getLoginPO().getLoginButton().click();
            protractor_1.browser.logger.info("Logging in...");
        });
    }
    login(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.get(protractor_1.browser.params.login.baseURL);
            let sessionObject = yield protractor_1.browser.driver.getSession();
            protractor_1.browser.logger.info("Opening the browser and navigating to the application url - " + protractor_1.browser.params.login.baseURL);
            protractor_1.browser.logger.info("User credentials: " + userInfo.getUserName() + ", " + userInfo.getPassword());
            protractor_1.browser.logger.info("Session ID = " + sessionObject.getId());
            yield this.performLogin(userInfo);
        });
    }
    doBaseLogin() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.login(this.setBaseUserInfo());
        });
    }
    loginInSameBrowserInstance(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.performLogin(userInfo);
        });
    }
    doBaseLoginInSameBrowserInstance() {
        return __awaiter(this, void 0, void 0, function* () {
            let userInfo = this.setBaseUserInfo();
            yield this.performLogin(userInfo);
        });
    }
}
exports.LoginLib = LoginLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5MaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9sb2dpbnBhZ2UvTG9naW5MaWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFxQztBQUNyQyx3REFBcUQ7QUFDckQsdURBQW9EO0FBRXBELE1BQWEsUUFBUTtJQUduQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVPLGVBQWU7UUFDckIsSUFBSSxRQUFRLEdBQVksSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDdkMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEQsUUFBUSxDQUFDLFdBQVcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVhLFlBQVksQ0FBQyxRQUFpQjs7WUFDMUMsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDNUUsTUFBTSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtJQUVLLEtBQUssQ0FBQyxRQUFpQjs7WUFDM0IsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDaEQsSUFBSSxhQUFhLEdBQUcsTUFBTSxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0RCxvQkFBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOERBQThELEdBQUcsb0JBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ILG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxRQUFRLENBQUMsV0FBVyxFQUFFLEdBQUcsSUFBSSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1lBQ25HLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFFN0QsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2YsT0FBTyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDbEQsQ0FBQztLQUFBO0lBRUssMEJBQTBCLENBQUMsUUFBaUI7O1lBQ2hELE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFFSyxnQ0FBZ0M7O1lBQ3BDLElBQUksUUFBUSxHQUFZLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsQ0FBQztLQUFBO0NBQ0Y7QUFoREQsNEJBZ0RDIn0=