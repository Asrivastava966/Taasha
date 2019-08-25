import { element, by } from "protractor";
import { SelectDropdown } from "../../../component/comp/SelectDropdown";

export class RoleTabPO {
    private static statusDropdown = element(by.id('inputStatus'));
    private static descriptionInputField = element(by.id('inputRoleDsc'));
    private static typeDropdown = element(by.id('inputRoleType'));
    private static submitOrUpdateButton = element(by.css('[ng-click*=\"saveRoleInfo\"]'));

    getStatusDropdown() {
        return new SelectDropdown(RoleTabPO.statusDropdown);
    }

    getDescriptionInputField() {
        return RoleTabPO.descriptionInputField;
    }

    getTypeDropdown() {
        return new SelectDropdown(RoleTabPO.typeDropdown);
    }

    getSubmitOrUpdateButton() {
        return RoleTabPO.submitOrUpdateButton;
    }
}