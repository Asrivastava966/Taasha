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
const FindPatientLib_1 = require("../../../../lib/findpatientpage/FindPatientLib");
const Document_1 = require("../../../../data/basedata/Document");
const Tabs_1 = require("../../../../data/enums/Tabs");
const DocumentType_1 = require("../../../../data/enums/DocumentType");
const DeliveryTicketFormInfo_1 = require("../../../../data/info/DeliveryTicketFormInfo");
const FormsInfo_1 = require("../../../../data/info/FormsInfo");
let propertiesReader = require('properties-reader');
let orderInfoProperties = propertiesReader('ra_automation/data/properties/OrderInfo.file');
let userInfoProperties = propertiesReader('ra_automation/data/properties/UserInfo.file');
let commonUtils = new CommonUtils_1.CommonUtils();
describe('[SPEC]: Resupply Orders- I spoke with the patient: UI tests', function () {
    let loginLib;
    let homepageLib;
    let addPatientLib;
    let findPatientLib;
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
            findPatientLib = new FindPatientLib_1.FindPatientLib();
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
            // await addPatientLib.getOrdersLib().navigateToDocumentsTab();
            // await document.uploadTestDocument();
            // await addPatientLib.getOrdersLib().navigateToOrderInfoTab();
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
    it('[TEST]: Add Patient - Normal Add > Orders tab - Verify Resupplies Contact Information', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homepageLib.findPatient();
            yield findPatientLib.searchPatientWithLastName(patientInfo.getLastName());
            yield findPatientLib.searchPatientWithFirstName(patientInfo.getFirstName());
            yield findPatientLib.search();
            let firstRowIndex = 1;
            yield findPatientLib.getFirstNameLink(firstRowIndex).click();
            yield addPatientLib.navigateToOrdersTab();
            yield addPatientLib.getOrdersLib().updateResupplyTempOrder(firstRowIndex);
            //Verification points 
            let expectedPatientName = patientInfo.getFirstName() + ' ' + patientInfo.getLastName();
            yield expect(yield resuppliesContactInformationLib.getPatientName()).toBe(expectedPatientName);
        });
    });
    it('[TEST]: Resupplies > New Orders - Verify Resupplies Contact Information', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield homepageLib.navigateToHomepageDashboardBucket(HomepageDashboardBucket_1.HomepageDashboardBucket.RESUPPLIES);
            yield resuppliesDashboardLib.navigateToResuppliesDashboardBucket(ResuppliesDashboardBucket_1.ResuppliesDashboardBucket.NEW_ORDERS);
            yield resupplyOrdersLib.navigateToResuppliesContactInformationPage(patientInfo.getFirstName());
            let expectedPatientName = patientInfo.getFirstName() + ' ' + patientInfo.getLastName();
            yield expect(yield resuppliesContactInformationLib.getPatientName()).toBe(expectedPatientName);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbHlPcmRlcnNVSVRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL3NwZWMvaG9tZXBhZ2VkYXNoYm9hcmQvcmVzdXBwbGllc2J1Y2tldC91aWNoZWNrcy9SZXN1cHBseU9yZGVyc1VJVGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsaUVBQThEO0FBQzlELHNFQUFtRTtBQUNuRSwwRUFBdUU7QUFDdkUsc0ZBQW1GO0FBQ25GLCtEQUE0RDtBQUM1RCxtRUFBZ0U7QUFDaEUsZ0VBQTZEO0FBQzdELCtEQUE0RDtBQUM1RCx3RUFBcUU7QUFDckUsMkRBQXdEO0FBQ3hELCtEQUE0RDtBQUM1RCw2REFBMEQ7QUFDMUQsNEZBQXlGO0FBQ3pGLHNGQUFtRjtBQUNuRixvSUFBaUk7QUFFakksZ0tBQTZKO0FBQzdKLDRGQUF5RjtBQUN6Riw2R0FBMEc7QUFDMUcsZ0dBQTZGO0FBQzdGLG1HQUFnRztBQUNoRyxtRkFBZ0Y7QUFDaEYsaUVBQThEO0FBQzlELHNEQUFtRDtBQUNuRCxzRUFBbUU7QUFDbkUseUZBQXNGO0FBQ3RGLCtEQUE0RDtBQUU1RCxJQUFJLGdCQUFnQixHQUFHLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3BELElBQUksbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUMsOENBQThDLENBQUMsQ0FBQztBQUMzRixJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFDekYsSUFBSSxXQUFXLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFFaEQsUUFBUSxDQUFDLDZEQUE2RCxFQUFFO0lBQ3BFLElBQUksUUFBaUIsQ0FBQztJQUN0QixJQUFJLFdBQXVCLENBQUM7SUFDNUIsSUFBSSxhQUEyQixDQUFDO0lBQ2hDLElBQUksY0FBNkIsQ0FBQztJQUNsQyxJQUFJLGlCQUFtQyxDQUFDO0lBQ3hDLElBQUkseUJBQW1E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