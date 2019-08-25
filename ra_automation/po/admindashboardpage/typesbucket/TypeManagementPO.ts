import {element,by} from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";

export class TypeManagementPO{

    private static selectTypeDropdown= element(by.model("manageObjectTypeId"))
    private static goButton= element(by.buttonText("GO"))
    private static adminDashboardButton= element(by.buttonText("Admin Dashboard"))

    getSelectTypeDropdown(){
        return new SelectDropdown(TypeManagementPO.selectTypeDropdown)
    }

    getGoButton(){
        return TypeManagementPO.goButton
    }

    getAdminDashboardButton(){
        return TypeManagementPO.adminDashboardButton
    }

    private static addNewtypeButton= element(by.buttonText("Add New Type"))

    getAddNewtypeButton(){
        return TypeManagementPO.addNewtypeButton
    }

    private static statusDropdown= element(by.model("types.payload.statusCd"))
    private static descriptionInputText= element(by.model("types.payload.typeDsc"))
    private static legacyIdInputText= element(by.model("types.payload.legacyId"))
    private static updateButton= element(by.css("input[ng-click='updateType(addForm.$valid)']"))
    private static successsUpdateMessage= element(by.css("div[ng-if='successMessage']"))

    getStatusDropdown(){
        return new SelectDropdown(TypeManagementPO.statusDropdown)
    }

    getDescriptionInputText(){
        return TypeManagementPO.descriptionInputText
    }

    getLegacyIdInputTextBox(){
        return TypeManagementPO.legacyIdInputText
    }

    getUpdateButtton(){
        return TypeManagementPO.updateButton
    }

    getSuccessMessage(){
        return TypeManagementPO.successsUpdateMessage
    }

}