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
const UserInfo_1 = require("../info/UserInfo");
const UserType_1 = require("../enums/UserType");
const UserStatus_1 = require("../enums/UserStatus");
const UserManagementLib_1 = require("../../lib/admindashboardpage/usersbucket/UserManagementLib");
const CommonUtils_1 = require("../../utils/CommonUtils");
const TechnicianType_1 = require("../enums/TechnicianType");
const SkillSet_1 = require("../enums/SkillSet");
let propertiesReader = require('properties-reader');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
class User {
    constructor(userType) {
        this.birthdate = commonUtils.getDateFromString(userInfoProperties.get('userinfo.birthdate'));
        this.userType = userType;
    }
    ////////// Base User Info //////////
    getUserNameWithTimeStamp(userName) {
        let userNameWithTimeStamp = userName + commonUtils.getTimeStamp() + '@css';
        return userNameWithTimeStamp;
    }
    getFirstNameWithTimeStamp(firstName) {
        let firstNameWithTimeStamp = firstName + commonUtils.getTimeStamp();
        return firstNameWithTimeStamp;
    }
    setBaseUserInfo(userType) {
        let userInfo = new UserInfo_1.UserInfo();
        switch (userType) {
            case UserType_1.UserType.ADMIN: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.adminuser')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.adminuser'));
                break;
            }
            case UserType_1.UserType.NORMAL_USER: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.normaluser')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.normaluser'));
                break;
            }
            case UserType_1.UserType.SALES_REP: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.salesrep')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.salesrep'));
                break;
            }
            case UserType_1.UserType.TECHNICIANS: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.technician')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.technician'));
                userInfo.setTechnicianType(TechnicianType_1.TechnicianType.RESPIRATORY_SUPERVISOR);
                userInfo.setSkillSet(SkillSet_1.SkillSet.RESPIRATORY_LPN);
                userInfo.setWarehouseSelectAllFlag(true);
                break;
            }
        }
        userInfo.setPassword(userInfoProperties.get('userinfo.password'));
        userInfo.setRepeatPassword(userInfoProperties.get('userinfo.password'));
        userInfo.setStatus(UserStatus_1.UserStatus.ACTIVE);
        userInfo.setBranchOfficeSelectAllCheckbox(true);
        userInfo.setFirstName(this.getFirstNameWithTimeStamp(userInfoProperties.get('userinfo.firstname')));
        userInfo.setLastName(userInfoProperties.get('userinfo.lastname'));
        userInfo.setBirthDate(this.birthdate);
        userInfo.setAddressOne(userInfoProperties.get('userinfo.addressone'));
        userInfo.setCity(userInfoProperties.get('userinfo.city'));
        userInfo.setState(userInfoProperties.get('userinfo.state'));
        userInfo.setZipCode(userInfoProperties.get('userinfo.zipcode'));
        userInfo.setOfficePhoneNumber(userInfoProperties.get('userinfo.officephone'));
        userInfo.setOfficePhoneExtNumber(userInfoProperties.get('userinfo.officephoneext'));
        userInfo.setMobileNumber(userInfoProperties.get('userinfo.mobile'));
        userInfo.setEmail(userInfoProperties.get('userinfo.email'));
        return userInfo;
    }
    ////////// Workflow Methods //////////
    addUser(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let userManagementLib = new UserManagementLib_1.UserManagementLib();
            yield userManagementLib.fillUserInfo(userInfo);
            yield userManagementLib.submit();
            return userInfo;
        });
    }
    addBaseUser() {
        return __awaiter(this, void 0, void 0, function* () {
            switch (this.userType) {
                case UserType_1.UserType.ADMIN: {
                    return yield this.addUser(this.setBaseUserInfo(UserType_1.UserType.ADMIN));
                }
                case UserType_1.UserType.NORMAL_USER: {
                    return yield this.addUser(this.setBaseUserInfo(UserType_1.UserType.NORMAL_USER));
                }
                case UserType_1.UserType.SALES_REP: {
                    return yield this.addUser(this.setBaseUserInfo(UserType_1.UserType.SALES_REP));
                }
                case UserType_1.UserType.TECHNICIANS: {
                    return yield this.addUser(this.setBaseUserInfo(UserType_1.UserType.TECHNICIANS));
                }
            }
        });
    }
    updateUser(userInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let userManagementLib = new UserManagementLib_1.UserManagementLib();
            yield userManagementLib.fillUserInfo(userInfo);
            yield userManagementLib.update();
        });
    }
}
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9iYXNlZGF0YS9Vc2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwrQ0FBNEM7QUFDNUMsZ0RBQTZDO0FBQzdDLG9EQUFpRDtBQUNqRCxrR0FBK0Y7QUFDL0YseURBQXNEO0FBQ3RELDREQUF5RDtBQUN6RCxnREFBNkM7QUFFN0MsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDekYsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsTUFBYSxJQUFJO0lBR2IsWUFBWSxRQUFpQjtRQWU3QixjQUFTLEdBQVEsV0FBVyxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFkekYsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7SUFDN0IsQ0FBQztJQUVELG9DQUFvQztJQUNwQyx3QkFBd0IsQ0FBQyxRQUFlO1FBQ3BDLElBQUkscUJBQXFCLEdBQUcsUUFBUSxHQUFHLFdBQVcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDM0UsT0FBTyxxQkFBcUIsQ0FBQztJQUNqQyxDQUFDO0lBRUQseUJBQXlCLENBQUMsU0FBZ0I7UUFDdEMsSUFBSSxzQkFBc0IsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BFLE9BQU8sc0JBQXNCLENBQUM7SUFDbEMsQ0FBQztJQUlPLGVBQWUsQ0FBQyxRQUFpQjtRQUNyQyxJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUU5QixRQUFPLFFBQVEsRUFBRTtZQUNiLEtBQUssbUJBQVEsQ0FBQyxLQUFLLENBQUMs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