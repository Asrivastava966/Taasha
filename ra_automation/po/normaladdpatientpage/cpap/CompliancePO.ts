import{by,element} from 'protractor';
import { SelectDropdown } from '../../../component/comp/SelectDropdown';

export class CompliancePO{
    
    //Demographic - Read Only UI
    private static firstName = element(by.model("deviceRegistration.payload.patientInfo.firstNm"));
    private static lastName = element(by.model("deviceRegistration.payload.patientInfo.lastNm"));
    private static dob = element(by.model("deviceRegistration.payload.patientInfo.dob"));
    private static setupDate = element(by.model("deviceRegistration.payload.patientInfo.setupDate"));
    private static status = element(by.model("deviceRegistration.payload.statusCd"));
    private static manufacturer = element(by.model("deviceRegistration.payload.patientInfo.manufatureNm"));
    private static orderNo = element(by.model("deviceRegistration.payload.patientInfo.orderNo"));

    //Sleep Lab/Physician Information
    private static dmeOffice = element(by.model("deviceRegistration.payload.medicalCare.companyOffice"));
    private static clinicalUserDropdown = element(by.model("deviceRegistration.payload.medicalCare.clinicianUser"))
    
    //Device Information - Respironics
    private static respironicsPapTypeDropdown = element(by.model("deviceRegistration.payload.deviceInfo.deviceTypeCd"))
    private static respironicsPapModelDropdown = element(by.model("deviceRegistration.payload.deviceInfo.deviceModelTypeCd"))
    private static respironicsPapModelDropdownRequiredFieldError = CompliancePO.respironicsPapModelDropdown.all(by.xpath("following-sibling::span")).get(1);
    private static respironicsPapSerialNumberInputField = element(by.model("respironicsDeviceSerialNumber"));
    private static respironicsPapSerialNumberInputFieldRequiredFieldError = CompliancePO.respironicsPapSerialNumberInputField.all(by.xpath("following-sibling::span")).first();

    //Device Information - Resmed
    private static resmedPapSerialNumberInputField = element(by.model("resmedDeviceSerialNumber"));
    private static resmedPapSerialNumberInputFieldRequiredFieldError = CompliancePO.resmedPapSerialNumberInputField.all(by.xpath("following-sibling::span")).first();
    private static resmedDeviceNumberInputField = element(by.model("deviceRegistration.payload.deviceInfo.deviceNumber"));
    private static resmedDeviceNumberInputFieldRequiredFieldError = CompliancePO.resmedDeviceNumberInputField.all(by.xpath("following-sibling::span")).first();

    //Footer
    private static submitButton = element(by.buttonText('Submit'));
    private static cancelButton = element(by.buttonText('Cancel'));

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
        return new SelectDropdown(CompliancePO.dmeOffice);
    }

    getClinicalUserDropDown() {
        return new SelectDropdown(CompliancePO.clinicalUserDropdown);
    }

    getRespironicsPapTypeDropDown() {
        return new SelectDropdown(CompliancePO.respironicsPapTypeDropdown);
    }

    getRepironicsPapModelDropDown() {
        return new SelectDropdown(CompliancePO.respironicsPapModelDropdown);
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