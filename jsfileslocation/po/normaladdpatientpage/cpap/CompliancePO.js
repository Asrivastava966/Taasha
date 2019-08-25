"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../component/comp/SelectDropdown");
class CompliancePO {
    getFirstName() {
        return CompliancePO.firstName;
    }
    getLastName() {
        return CompliancePO.lastName;
    }
    getDOB() {
        return CompliancePO.dob;
    }
    getSetupDate() {
        return CompliancePO.setupDate;
    }
    getStatus() {
        return CompliancePO.status;
    }
    getManufacturer() {
        return CompliancePO.manufacturer;
    }
    getOrderNo() {
        return CompliancePO.orderNo;
    }
    getDmeOfficeDropDown() {
        return new SelectDropdown_1.SelectDropdown(CompliancePO.dmeOffice);
    }
    getClinicalUserDropDown() {
        return new SelectDropdown_1.SelectDropdown(CompliancePO.clinicalUserDropdown);
    }
    getRespironicsPapTypeDropDown() {
        return new SelectDropdown_1.SelectDropdown(CompliancePO.respironicsPapTypeDropdown);
    }
    getRepironicsPapModelDropDown() {
        return new SelectDropdown_1.SelectDropdown(CompliancePO.respironicsPapModelDropdown);
    }
    getRespironicsPapSerialNumberInputField() {
        return CompliancePO.respironicsPapSerialNumberInputField;
    }
    getResmedPapSerialNumberInputField() {
        return CompliancePO.resmedPapSerialNumberInputField;
    }
    getResmedDeviceNumberInputField() {
        return CompliancePO.resmedDeviceNumberInputField;
    }
    getSubmitButton() {
        return CompliancePO.submitButton;
    }
    getCancelButton() {
        return CompliancePO.cancelButton;
    }
    //Required Field error
    getRespironicsPapModelDropdownRequiredFieldError() {
        return CompliancePO.respironicsPapModelDropdownRequiredFieldError;
    }
    getRespironicsPapSerialNumberInputFieldRequiredFieldError() {
        return CompliancePO.respironicsPapSerialNumberInputFieldRequiredFieldError;
    }
    getResmedPapSerialNumberInputFieldRequiredFieldError() {
        return CompliancePO.resmedPapSerialNumberInputFieldRequiredFieldError;
    }
    getResmedDeviceNumberInputFieldRequiredFieldError() {
        return CompliancePO.resmedDeviceNumberInputFieldRequiredFieldError;
    }
}
//Demographic - Read Only UI
CompliancePO.firstName = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.firstNm"));
CompliancePO.lastName = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.lastNm"));
CompliancePO.dob = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.dob"));
CompliancePO.setupDate = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.setupDate"));
CompliancePO.status = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.statusCd"));
CompliancePO.manufacturer = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.manufatureNm"));
CompliancePO.orderNo = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.patientInfo.orderNo"));
//Sleep Lab/Physician Information
CompliancePO.dmeOffice = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.medicalCare.companyOffice"));
CompliancePO.clinicalUserDropdown = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.medicalCare.clinicianUser"));
//Device Information - Respironics
CompliancePO.respironicsPapTypeDropdown = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.deviceInfo.deviceTypeCd"));
CompliancePO.respironicsPapModelDropdown = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.deviceInfo.deviceModelTypeCd"));
CompliancePO.respironicsPapModelDropdownRequiredFieldError = CompliancePO.respironicsPapModelDropdown.all(protractor_1.by.xpath("following-sibling::span")).get(1);
CompliancePO.respironicsPapSerialNumberInputField = protractor_1.element(protractor_1.by.model("respironicsDeviceSerialNumber"));
CompliancePO.respironicsPapSerialNumberInputFieldRequiredFieldError = CompliancePO.respironicsPapSerialNumberInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
//Device Information - Resmed
CompliancePO.resmedPapSerialNumberInputField = protractor_1.element(protractor_1.by.model("resmedDeviceSerialNumber"));
CompliancePO.resmedPapSerialNumberInputFieldRequiredFieldError = CompliancePO.resmedPapSerialNumberInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
CompliancePO.resmedDeviceNumberInputField = protractor_1.element(protractor_1.by.model("deviceRegistration.payload.deviceInfo.deviceNumber"));
CompliancePO.resmedDeviceNumberInputFieldRequiredFieldError = CompliancePO.resmedDeviceNumberInputField.all(protractor_1.by.xpath("following-sibling::span")).first();
//Footer
CompliancePO.submitButton = protractor_1.element(protractor_1.by.buttonText('Submit'));
CompliancePO.cancelButton = protractor_1.element(protractor_1.by.buttonText('Cancel'));
exports.CompliancePO = CompliancePO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGxpYW5jZVBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ub3JtYWxhZGRwYXRpZW50cGFnZS9jcGFwL0NvbXBsaWFuY2VQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFxQztBQUNyQywyRUFBd0U7QUFFeEUsTUFBYSxZQUFZO0lBZ0NyQixZQUFZO1FBQ1IsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxZQUFZLENBQUMsUUFBUSxDQUFDO0lBQ2pDLENBQUM7SUFFRCxNQUFNO1FBQ0YsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDO0lBQzVCLENBQUM7SUFFRCxZQUFZO1FBQ1IsT0FBTyxZQUFZLENBQUMsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxTQUFTO1FBQ0wsT0FBTyxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQy9CLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVO1FBQ04sT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1QkFBdUI7UUFDbkIsT0FBTyxJQUFJLCtCQUFjLENBQUMsWUFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELDZCQUE2QjtRQUN6QixPQUFPLElBQUksK0JBQWMsQ0FBQyxZQUFZLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsNkJBQTZCO1FBQ3pCLE9BQU8sSUFBSSwrQkFBYyxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCx1Q0FBdUM7UUFDbkMsT0FBTyxZQUFZLENBQUMsb0NBQW9DLENBQUM7SUFDN0QsQ0FBQztJQUVELGtDQUFrQztRQUM5QixPQUFPLFlBQVksQ0FBQywrQkFBK0IsQ0FBQztJQUN4RCxDQUFDO0lBRUQsK0JBQStCO1FBQzNCLE9BQU8sWUFBWSxDQUFDLDRCQUE0QixDQUFDO0lBQ3JELENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxlQUFlO1FBQ1gsT0FBTyxZQUFZLENBQUMsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsZ0RBQWdEO1FBQzVDLE9BQU8sWUFBWSxDQUFDLDZDQUE2QyxDQUFDO0lBQ3RFLENBQUM7SUFFRCx5REFBeUQ7UUFDckQsT0FBTyxZQUFZLENBQUMsc0RBQXNELENBQUM7SUFDL0UsQ0FBQztJQUVELG9EQUFvRDtRQUNoRCxPQUFPLFlBQVksQ0FBQyxpREFBaUQsQ0FBQztJQUMxRSxDQUFDO0lBRUQsaURBQWlEO1FBQzdDLE9BQU8sWUFBWSxDQUFDLDhDQUE4QyxDQUFDO0lBQ3ZFLENBQUM7O0FBN0dELDRCQUE0QjtBQUNiLHNCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztBQUNoRixxQkFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDLENBQUM7QUFDOUUsZ0JBQUcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLHNCQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUMsQ0FBQztBQUNsRixtQkFBTSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUM7QUFDbEUseUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO0FBQ3hGLG9CQUFPLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztBQUU3RixpQ0FBaUM7QUFDbEIsc0JBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO0FBQ3RGLGlDQUFvQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLENBQUE7QUFFL0csa0NBQWtDO0FBQ25CLHVDQUEwQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLENBQUE7QUFDcEcsd0NBQTJCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlEQUF5RCxDQUFDLENBQUMsQ0FBQTtBQUMxRywwREFBNkMsR0FBRyxZQUFZLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6SSxpREFBb0MsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO0FBQzFGLG1FQUFzRCxHQUFHLFlBQVksQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFM0ssNkJBQTZCO0FBQ2QsNENBQStCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztBQUNoRiw4REFBaUQsR0FBRyxZQUFZLENBQUMsK0JBQStCLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xKLHlDQUE0QixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLENBQUM7QUFDdkcsMkRBQThDLEdBQUcsWUFBWSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUUzSixRQUFRO0FBQ08seUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUNoRCx5QkFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBOUJuRSxvQ0FnSEMifQ==