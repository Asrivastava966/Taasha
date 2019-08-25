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
const LoginLib_1 = require("../../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../../lib/homepage/HomepageLib");
const AddPatientMode_1 = require("../../../../data/enums/AddPatientMode");
const AddPatientLib_1 = require("../../../../lib/normaladdpatientpage/AddPatientLib");
const Patient_1 = require("../../../../data/basedata/Patient");
const Insurance_1 = require("../../../../data/basedata/Insurance");
const OrderType_1 = require("../../../../data/enums/OrderType");
const CommonUtils_1 = require("../../../../utils/CommonUtils");
const InsuranceType_1 = require("../../../../data/enums/InsuranceType");
const Order_1 = require("../../../../data/basedata/Order");
const Product_1 = require("../../../../data/basedata/Product");
const UserInfo_1 = require("../../../../data/info/UserInfo");
const AdminDashboardLib_1 = require("../../../../lib/admindashboardpage/AdminDashboardLib");
const AdminDashboardBucket_1 = require("../../../../data/enums/AdminDashboardBucket");
const ResuppliesCampaignListLib_1 = require("../../../../lib/admindashboardpage/resupplycampaignsbucket/ResuppliesCampaignListLib");
const ResuppliesContactInformationLib_1 = require("../../../../lib/homepage/resuppliesbucket/resuppliescontactinformationpage/ResuppliesContactInformationLib");
const HomepageDashboardBucket_1 = require("../../../../data/enums/HomepageDashboardBucket");
const ResuppliesDashboardLib_1 = require("../../../../lib/homepage/resuppliesbucket/ResuppliesDashboardLib");
const ResuppliesDashboardBucket_1 = require("../../../../data/enums/ResuppliesDashboardBucket");
const ResupplyOrdersLib_1 = require("../../../../lib/homepage/resuppliesbucket/ResupplyOrdersLib");
const CallResultPatientNoteInfo_1 = require("../../../../data/info/CallResultPatientNoteInfo");
const ResupplyOrderInfo_1 = require("../../../../data/info/ResupplyOrderInfo");
const CallResultPatientNote_1 = require("../../../../data/enums/CallResultPatientNote");
const Document_1 = require("../../../../data/basedata/Document");
const Tabs_1 = require("../../../../data/enums/Tabs");
const DocumentType_1 = require("../../../../data/enums/DocumentType");
const DeliveryTicketFormInfo_1 = require("../../../../data/info/DeliveryTicketFormInfo");
const FormsInfo_1 = require("../../../../data/info/FormsInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Resupply Orders- Contact Patient: Workflow tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let adminDashboardLib;
    let resuppliesCampaignListLib;
    let resuppliesContactInformationLib;
    let resuppliesDashboardLib;
    let resupplyOrdersLib;
    let patient;
    let patientInfo;
    let insurance;
    let order;
    let product;
    let document;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            addPatientLib = new AddPatientLib_1.AddPatientLib();
            patient = new Patient_1.Patient(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            insurance = new Insurance_1.Insurance(AddPatientMode_1.AddPatientMode.NORMAL_ADD, InsuranceType_1.InsuranceType.PRIMARY);
            order = new Order_1.Order(AddPatientMode_1.AddPatientMode.NORMAL_ADD, OrderType_1.OrderType.AUTO_CPAP);
            product = new Product_1.Product();
            document = new Document_1.Document(Tabs_1.Tabs.ORDER, DocumentType_1.DocumentType.COMPLETED_DELIVERY_TICKET);
            adminDashboardLib = new AdminDashboardLib_1.AdminDashboardLib();
            resuppliesCampaignListLib = new ResuppliesCampaignListLib_1.ResuppliesCampaignListLib();
            resuppliesContactInformationLib = new ResuppliesContactInformationLib_1.ResuppliesContactInformationLib();
            resuppliesDashboardLib = new ResuppliesDashboardLib_1.ResuppliesDashboardLib();
            resupplyOrdersLib = new ResupplyOrdersLib_1.ResupplyOrdersLib();
            let a7035_hcpcsCode = 'A7035';
            let a7037_hcpcsCode = 'A7037';
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.NORMAL_ADD);
            patientInfo = yield patient.addBasePatient(true);
            yield addPatientLib.navigateToInsuranceInfoTab();
            yield insurance.addBaseInsurance(true);
            yield addPatientLib.navigateToOrdersTab();
            yield order.addBaseOrder(false);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7035_hcpcsCode);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().getProductsGrid().deleteProductUsingHCPCSCode(a7037_hcpcsCode);
            yield product.addBaseProduct(true);
            //Verify the added Insurance 
            let verificationDate = commonUtils.getDateFromString(orderInfoProperties.get('orders.insuranceverification.verificationdate'));
            yield addPatientLib.getOrdersLib().verifyInsurance(verificationDate);
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            //Generate Delivery Ticket 
            let deliveryTicketFormInfo = new DeliveryTicketFormInfo_1.DeliveryTicketFormInfo();
            deliveryTicketFormInfo.setPatientSign(true);
            let formsInfo = new FormsInfo_1.FormsInfo();
            formsInfo.setDeliveryTicketFormInfo(deliveryTicketFormInfo);
            yield addPatientLib.getOrdersLib().generateForms(formsInfo);
            yield addPatientLib.getOrdersLib().getOrderInfoLib().saveOrder();
            yield addPatientLib.getOrdersLib().navigateToDocumentsTab();
            yield document.uploadTestDocument();
            yield addPatientLib.getOrdersLib().navigateToOrderInfoTab();
            yield addPatientLib.getOrdersLib().getOrderInfoLib().completeAndConfirmOrder();
            //Logout -> Login with an Admin User which has rights to trigger a Cron job 
            yield homepageLib.logout();
            //SU - Admin credentials 
            let sUserInfo = new UserInfo_1.UserInfo();
            sUserInfo.setUserName(userInfoProperties.get('userinfo.username.su.adminuser'));
            sUserInfo.setPassword(userInfoProperties.get('userinfo.password.su.adminuser'));
            let monthOffset = 4;
            let startDateOfCronJob = new Date(2019, 1, 1);
            let endDateOfCronJob = commonUtils.getDateWithOffset(monthOffset);
            yield loginLib.login(sUserInfo);
            yield homepageLib.navigateToAdminDashboardPage();
            yield adminDashboardLib.navigateToAdminDashboardBucket(AdminDashboardBucket_1.AdminDashboardBucket.RESUPPLY_CAMPAIGNS);
            yield resuppliesCampaignListLib.processCustomCronJob(startDateOfCronJob, endDateOfCronJob);
            yield homepageLib.logout();
            yield loginLib.doBaseLogin();
        });
    });
    it('[TEST]: Resupplies Contact Information > Contact Patient', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket_1.HomepageDashboardBucket.RESUPPLIES);
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.NEW_ORDERS);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
            let callResultPatientNoteInfo = new CallResultPatientNoteInfo_1.CallResultPatientNoteInfo();
            let resupplyOrderInfo = new ResupplyOrderInfo_1.ResupplyOrderInfo();
            yield resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote_1.CallResultPatientNote.LEFT_MESSAGE, callResultPatientNoteInfo, resupplyOrderInfo);
            yield resupplyOrdersLib.navigateToResuppliesDashboard();
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.CONTACT_PATIENT);
            yield resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
            let firstRowIndex = 1;
            let firstNoteCount = 1;
            yield expect(yield resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(firstNoteCount);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
            yield resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote_1.CallResultPatientNote.PATIENT_UNAVAILABLE, callResultPatientNoteInfo, resupplyOrderInfo);
            yield resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
            yield resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote_1.CallResultPatientNote.NUMBER_DISCONNECTED, callResultPatientNoteInfo, resupplyOrderInfo);
            yield resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);
        });
    });
    it('[TEST]: Resupplies Contact Information > Contact Patient - Other', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket_1.HomepageDashboardBucket.RESUPPLIES);
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.NEW_ORDERS);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
            let callResultPatientNoteInfo = new CallResultPatientNoteInfo_1.CallResultPatientNoteInfo();
            let resupplyOrderInfo = new ResupplyOrderInfo_1.ResupplyOrderInfo();
            yield resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote_1.CallResultPatientNote.OTHER, callResultPatientNoteInfo, resupplyOrderInfo);
            yield resupplyOrdersLib.navigateToResuppliesDashboard();
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.PENDING);
            yield resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
            let firstRowIndex = 1;
            let firstNoteCount = 1;
            yield expect(yield resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(firstNoteCount);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPageViaRowNumber(firstRowIndex);
            yield resuppliesContactInformationLib.getContactPatientLib().fillCallResultPatientNote(CallResultPatientNote_1.CallResultPatientNote.LEFT_MESSAGE, callResultPatientNoteInfo, resupplyOrderInfo);
            yield resupplyOrdersLib.navigateToResuppliesDashboard();
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.CONTACT_PATIENT);
            yield resupplyOrdersLib.filterResupplyOrdersViaPatientName(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getPatientName(firstRowIndex)).toContain(patientInfo.getFirstName());
            yield expect(yield resupplyOrdersLib.getNumberOfPatientContactNotes(firstRowIndex)).toBe(++firstNoteCount);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbHlPcmRlcnNDb250YWN0UGF0aWVudFdvcmtmbG93VGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vc3BlYy9ob21lcGFnZWRhc2hib2FyZC9yZXN1cHBsaWVzYnVja2V0L3dvcmtmbG93L1Jlc3VwcGx5T3JkZXJzQ29udGFjdFBhdGllbnRXb3JrZmxvd1Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlFQUE4RDtBQUM5RCxzRUFBbUU7QUFDbkUsMEVBQXVFO0FBQ3ZFLHNGQUFtRjtBQUNuRiwrREFBNEQ7QUFDNUQsbUVBQWdFO0FBQ2hFLGdFQUE2RDtBQUM3RCwrREFBNEQ7QUFDNUQsd0VBQXFFO0FBQ3JFLDJEQUF3RDtBQUN4RCwrREFBNEQ7QUFDNUQsNkRBQTBEO0FBQzFELDRGQUF5RjtBQUN6RixzRkFBbUY7QUFDbkYsb0lBQWlJO0FBRWpJLGdLQUE2SjtBQUM3Siw0RkFBeUY7QUFDekYsNkdBQTBHO0FBQzFHLGdHQUE2RjtBQUM3RixtR0FBZ0c7QUFDaEcsK0ZBQTRGO0FBQzVGLCtFQUE0RTtBQUM1RSx3RkFBcUY7QUFDckYsaUVBQThEO0FBQzlELHNEQUFtRDtBQUNuRCxzRUFBbUU7QUFDbkUseUZBQXNGO0FBQ3RGLCtEQUE0RDtBQUU1RCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDekYsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsUUFBUSxDQUFDLDBEQUEwRCxFQUFFO0lBQ2pFLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixD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