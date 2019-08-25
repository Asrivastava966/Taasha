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
const LoginLib_1 = require("../../../lib/loginpage/LoginLib");
const HomepageLib_1 = require("../../../lib/homepage/HomepageLib");
const FindPatientLib_1 = require("../../../lib/findpatientpage/FindPatientLib");
let propertiesReader = require('properties-reader');
let properties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');
describe('[SPEC]: Find patient: UI Validation tests', function () {
    let loginLib;
    let homepageLib;
    let findPatientLib;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            findPatientLib = new FindPatientLib_1.FindPatientLib();
            yield loginLib.doBaseLogin();
            yield homepageLib.findPatient();
        });
    });
    it('[TEST]: Find Patient without providing any search criteria', function () {
        return __awaiter(this, void 0, void 0, function* () {
            //Execute test
            yield findPatientLib.search();
            let expectedValidationMessage = properties.get('validation.findpatient.required');
            expect(findPatientLib.getNoSearchCriteriaValidationMessage()).toEqual(expectedValidationMessage);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluZFBhdGllbnRVSVZhbGlkYXRpb25UZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2ZpbmRwYXRpZW50L3VpdmFsaWRhdGlvbmNoZWNrcy9GaW5kUGF0aWVudFVJVmFsaWRhdGlvblRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDhEQUEyRDtBQUMzRCxtRUFBZ0U7QUFDaEUsZ0ZBQTZFO0FBRTdFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsdURBQXVELENBQUMsQ0FBQztBQUUzRixRQUFRLENBQUMsMkNBQTJDLEVBQUU7SUFDbEQsSUFBSSxRQUFrQixDQUFDO0lBQ3ZCLElBQUksV0FBd0IsQ0FBQztJQUM3QixJQUFJLGNBQThCLENBQUM7SUFFbkMsVUFBVSxDQUFDOztZQUNQLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztZQUMxQixXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7WUFDaEMsY0FBYyxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO1lBRXRDLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdCLE1BQU0sV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLENBQUM7S0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNERBQTRELEVBQUU7O1lBRTdELGNBQWM7WUFDZCxNQUFNLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUU5QixJQUFJLHlCQUF5QixHQUFVLFVBQVUsQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUN6RixNQUFNLENBQUMsY0FBYyxDQUFDLG9DQUFvQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUNyRyxDQUFDO0tBQUEsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==