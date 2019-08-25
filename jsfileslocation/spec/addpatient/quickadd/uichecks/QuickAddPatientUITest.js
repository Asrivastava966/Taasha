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
const QuickAddPatientLib_1 = require("../../../../lib/quickaddpatientpage/QuickAddPatientLib");
describe('[SPEC]: Add patient via Quick Add form: UI tests', function () {
    let loginLib;
    let homepageLib;
    let quickAddPatientLib;
    beforeEach(function () {
        return __awaiter(this, void 0, void 0, function* () {
            loginLib = new LoginLib_1.LoginLib();
            homepageLib = new HomepageLib_1.HomepageLib();
            quickAddPatientLib = new QuickAddPatientLib_1.QuickAddPatientLib();
            yield loginLib.doBaseLogin();
            yield homepageLib.selectAddPatientMode(AddPatientMode_1.AddPatientMode.QUICK_ADD);
        });
    });
    it('[TEST]: Verify Close button of the Quick Add Patient modal', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield quickAddPatientLib.closeModal();
            //Verifications
            expect(quickAddPatientLib.getQuickAddPatientPO().getModalHeader().isPresent()).toBeFalsy();
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVpY2tBZGRQYXRpZW50VUlUZXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9zcGVjL2FkZHBhdGllbnQvcXVpY2thZGQvdWljaGVja3MvUXVpY2tBZGRQYXRpZW50VUlUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpRUFBOEQ7QUFDOUQsc0VBQW1FO0FBQ25FLDBFQUF1RTtBQUN2RSwrRkFBNEY7QUFFNUYsUUFBUSxDQUFDLGtEQUFrRCxFQUFFO0lBQ3pELElBQUksUUFBa0IsQ0FBQztJQUN2QixJQUFJLFdBQXdCLENBQUM7SUFDN0IsSUFBSSxrQkFBc0MsQ0FBQztJQUUzQyxVQUFVLENBQUM7O1lBQ1AsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO1lBQzFCLFdBQVcsR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztZQUNoQyxrQkFBa0IsR0FBRyxJQUFJLHVDQUFrQixFQUFFLENBQUM7WUFFOUMsTUFBTSxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0IsTUFBTSxXQUFXLENBQUMsb0JBQW9CLENBQUMsK0JBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRSxDQUFDO0tBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDREQUE0RCxFQUFFOztZQUM3RCxNQUFNLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO1lBRXRDLGVBQWU7WUFDZixNQUFNLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9GLENBQUM7S0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyJ9