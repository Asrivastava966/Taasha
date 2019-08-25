import { LoginLib } from "../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../lib/homepage/HomepageLib";
import { FindPatientLib } from "../../../lib/findpatientpage/FindPatientLib";

let propertiesReader = require('properties-reader');
let properties = propertiesReader('ra_automation/data/properties/ValidationMessages.file');

describe('[SPEC]: Find patient: UI Validation tests', function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let findPatientLib: FindPatientLib;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        findPatientLib = new FindPatientLib();

        await loginLib.doBaseLogin();
        await homepageLib.findPatient();
    });

    it('[TEST]: Find Patient without providing any search criteria', async function() {

        //Execute test
        await findPatientLib.search();
        
        let expectedValidationMessage:string = properties.get('validation.findpatient.required');
        expect(findPatientLib.getNoSearchCriteriaValidationMessage()).toEqual(expectedValidationMessage);
    });
});