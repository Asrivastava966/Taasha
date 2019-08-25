import { UserInfo } from "../info/UserInfo";
import { UserType } from "../enums/UserType";
import { UserStatus } from "../enums/UserStatus";
import { UserManagementLib } from "../../lib/admindashboardpage/usersbucket/UserManagementLib";
import { CommonUtils } from '../../utils/CommonUtils';
import { TechnicianType } from "../enums/TechnicianType";
import { SkillSet } from "../enums/SkillSet";

let propertiesReader = require('properties-reader');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils:CommonUtils = new CommonUtils();

export class User {
    private userType:UserType;

    constructor(userType:UserType) {
        this.userType = userType;
    }

    ////////// Base User Info //////////
    getUserNameWithTimeStamp(userName:string) {
        let userNameWithTimeStamp = userName + commonUtils.getTimeStamp() + '@css';
        return userNameWithTimeStamp;
    }

    getFirstNameWithTimeStamp(firstName:string) {
        let firstNameWithTimeStamp = firstName + commonUtils.getTimeStamp();
        return firstNameWithTimeStamp;
    }
        
    birthdate:Date = commonUtils.getDateFromString(userInfoProperties.get('userinfo.birthdate'));

    private setBaseUserInfo(userType:UserType) {
        let userInfo = new UserInfo();

        switch(userType) {
            case UserType.ADMIN: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.adminuser')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.adminuser'));
                break;
            }

            case UserType.NORMAL_USER: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.normaluser')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.normaluser'));
                break;
            }

            case UserType.SALES_REP: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.salesrep')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.salesrep'));
                break;
            }

            case UserType.TECHNICIANS: {
                userInfo.setUserName(this.getUserNameWithTimeStamp(userInfoProperties.get('userinfo.username.technician')));
                userInfo.setUserType(this.userType);
                userInfo.setRole(userInfoProperties.get('userinfo.role.technician'));
                userInfo.setTechnicianType(TechnicianType.RESPIRATORY_SUPERVISOR);
                userInfo.setSkillSet(SkillSet.RESPIRATORY_LPN);
                userInfo.setWarehouseSelectAllFlag(true);
                break;
            }
        }
        userInfo.setPassword(userInfoProperties.get('userinfo.password'));
        userInfo.setRepeatPassword(userInfoProperties.get('userinfo.password'));
        userInfo.setStatus(UserStatus.ACTIVE);
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
    async addUser(userInfo:UserInfo) {
        let userManagementLib:UserManagementLib = new UserManagementLib();

        await userManagementLib.fillUserInfo(userInfo);
        await userManagementLib.submit();

        return userInfo;
    }

    async addBaseUser() {
        switch(this.userType) {
            case UserType.ADMIN: {
                return await this.addUser(this.setBaseUserInfo(UserType.ADMIN));
            }

            case UserType.NORMAL_USER: {
                return await this.addUser(this.setBaseUserInfo(UserType.NORMAL_USER));
            }

            case UserType.SALES_REP: {
                return await this.addUser(this.setBaseUserInfo(UserType.SALES_REP));
            }

            case UserType.TECHNICIANS: {
                return await this.addUser(this.setBaseUserInfo(UserType.TECHNICIANS));
            }
        }
    }

    async updateUser(userInfo:UserInfo) {
        let userManagementLib:UserManagementLib = new UserManagementLib();

        await userManagementLib.fillUserInfo(userInfo);
        await userManagementLib.update();
    }
}