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
const ResuppliesContactInformationPO_1 = require("../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ResuppliesContactInformationPO");
const ContactPatientLib_1 = require("./ContactPatientLib");
const SuppliesLib_1 = require("./SuppliesLib");
const ProcessResultLib_1 = require("./ProcessResultLib");
class ResuppliesContactInformationLib {
    constructor() {
        this.resuppliesContactInformationPO = new ResuppliesContactInformationPO_1.ResuppliesContactInformationPO();
        this.contactPatientLib = new ContactPatientLib_1.ContactPatientLib();
        this.suppliesLib = new SuppliesLib_1.SuppliesLib();
        this.processResultLib = new ProcessResultLib_1.ProcessResultLib();
    }
    getResuppliesContactInformationPO() {
        return this.resuppliesContactInformationPO;
    }
    getContactPatientLib() {
        return this.contactPatientLib;
    }
    getSuppliesLib() {
        return this.suppliesLib;
    }
    getProcessResultLib() {
        return this.processResultLib;
    }
    navigateBackToResupplyOrdersPage() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getResuppliesContactInformationPO().getBackToResuppliesButton().click();
        });
    }
    getPatientName() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getResuppliesContactInformationPO().getPatientName().getText();
        });
    }
    getDOB() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getResuppliesContactInformationPO().getDOB().getText();
        });
    }
    getGender() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield yield this.getResuppliesContactInformationPO().getGender().getText();
        });
    }
}
exports.ResuppliesContactInformationLib = ResuppliesContactInformationLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0NvbnRhY3RJbmZvcm1hdGlvbkxpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2hvbWVwYWdlL3Jlc3VwcGxpZXNidWNrZXQvcmVzdXBwbGllc2NvbnRhY3RpbmZvcm1hdGlvbnBhZ2UvUmVzdXBwbGllc0NvbnRhY3RJbmZvcm1hdGlvbkxpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsNkpBQTBKO0FBQzFKLDJEQUF3RDtBQUN4RCwrQ0FBNEM7QUFDNUMseURBQXNEO0FBR3RELE1BQWEsK0JBQStCO0lBTXhDO1FBQ0ksSUFBSSxDQUFDLDhCQUE4QixHQUFHLElBQUksK0RBQThCLEVBQUUsQ0FBQztRQUMzRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxxQ0FBaUIsRUFBRSxDQUFDO1FBQ2pELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztJQUNuRCxDQUFDO0lBRUQsaUNBQWlDO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDO0lBQy9DLENBQUM7SUFFRCxvQkFBb0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUM7SUFDbEMsQ0FBQztJQUVELGNBQWM7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUVELG1CQUFtQjtRQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQ2pDLENBQUM7SUFFSyxnQ0FBZ0M7O1lBQ2xDLE1BQU0sSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RixDQUFDO0tBQUE7SUFFSyxjQUFjOztZQUNoQixPQUFPLE1BQU0sSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckYsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDUixPQUFPLE1BQU0sSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0UsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDWCxPQUFPLE1BQU0sTUFBTSxJQUFJLENBQUMsaUNBQWlDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN0RixDQUFDO0tBQUE7Q0FDSjtBQTVDRCwwRUE0Q0MifQ==