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
const ContactPatientOrdersPO_1 = require("../../../po/homepage/contactpatientbucket/ContactPatientOrdersPO");
class ContactPatientOrdersLib {
    constructor() {
        this.contactPatientOrdersPO = new ContactPatientOrdersPO_1.ContactPatientOrdersPO();
    }
    getContactPatientOrdersPO() {
        return this.contactPatientOrdersPO;
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getContactPatientOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
        });
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getContactPatientOrdersPO().getOrdersGrid().getPatientName(rowNumber);
        });
    }
    getOrderType(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getContactPatientOrdersPO().getOrdersGrid().getOrderType(rowNumber).getText();
        });
    }
}
exports.ContactPatientOrdersLib = ContactPatientOrdersLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFjdFBhdGllbnRPcmRlcnNMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9ob21lcGFnZS9jb250YWN0cGF0aWVudGJ1Y2tldC9Db250YWN0UGF0aWVudE9yZGVyc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkdBQTBHO0FBRTFHLE1BQWEsdUJBQXVCO0lBR2hDO1FBQ0ksSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksK0NBQXNCLEVBQUUsQ0FBQztJQUMvRCxDQUFDO0lBRUQseUJBQXlCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDO0lBQ3ZDLENBQUM7SUFFSywwQkFBMEIsQ0FBQyxXQUFrQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNuRyxDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUYsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLFNBQWdCOztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3BHLENBQUM7S0FBQTtDQUNKO0FBdEJELDBEQXNCQyJ9