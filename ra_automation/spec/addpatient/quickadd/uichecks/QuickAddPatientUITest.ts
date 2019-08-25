import { LoginLib } from "../../../../lib/loginpage/LoginLib";
import { HomepageLib } from "../../../../lib/homepage/HomepageLib";
import { AddPatientMode } from "../../../../data/enums/AddPatientMode";
import { QuickAddPatientLib } from "../../../../lib/quickaddpatientpage/QuickAddPatientLib";

describe('[SPEC]: Add patient via Quick Add form: UI tests', function() {
    let loginLib: LoginLib;
    let homepageLib: HomepageLib;
    let quickAddPatientLib: QuickAddPatientLib;

    beforeEach(async function(){
        loginLib = new LoginLib();
        homepageLib = new HomepageLib();
        quickAddPatientLib = new QuickAddPatientLib();

        await loginLib.doBaseLogin();
        await homepageLib.selectAddPatientMode(AddPatientMode.QUICK_ADD);
    });

    it('[TEST]: Verify Close button of the Quick Add Patient modal', async function() {
        await quickAddPatientLib.closeModal();

        //Verifications
        expect(quickAddPatientLib.getQuickAddPatientPO().getModalHeader().isPresent()).toBeFalsy();
    });
});

