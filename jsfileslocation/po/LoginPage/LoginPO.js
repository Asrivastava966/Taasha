"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPO {
    getLoginLogo() {
        return LoginPO.loginLogo;
    }
    getUsernameField() {
        return LoginPO.usernameField;
    }
    getPasswordField() {
        return LoginPO.passwordField;
    }
    getLoginButton() {
        return LoginPO.loginButton;
    }
}
LoginPO.loginLogo = protractor_1.element(protractor_1.by.className('loginLogo'));
LoginPO.usernameField = protractor_1.element(protractor_1.by.id('username'));
LoginPO.passwordField = protractor_1.element(protractor_1.by.id('password'));
LoginPO.loginButton = protractor_1.element(protractor_1.by.css('[type="submit"]'));
exports.LoginPO = LoginPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5QTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vTG9naW5QYWdlL0xvZ2luUE8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBeUM7QUFFekMsTUFBYSxPQUFPO0lBTWxCLFlBQVk7UUFDVixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQztJQUMvQixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDO0lBQy9CLENBQUM7SUFFRCxjQUFjO1FBQ1osT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzdCLENBQUM7O0FBbkJjLGlCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDL0MscUJBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUMzQyxxQkFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQzNDLG1CQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztBQUpsRSwwQkFxQkMifQ==