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
const CPAPPO_1 = require("../../../po/normaladdpatientpage/cpap/CPAPPO");
const ComplianceLib_1 = require("./ComplianceLib");
const ResuppliesLib_1 = require("./ResuppliesLib");
class CPAPLib {
    constructor() {
        this.cpapPO = new CPAPPO_1.CPAPPO();
        this.complianceLib = new ComplianceLib_1.ComplianceLib();
        this.resuppliesLib = new ResuppliesLib_1.ResuppliesLib();
    }
    getCPAPPO() {
        return this.cpapPO;
    }
    getComplianceLib() {
        return this.complianceLib;
    }
    getResuppliesLib() {
        return this.resuppliesLib;
    }
    navigateToResuppliesTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCPAPPO().getResuppliesTabButton().click();
        });
    }
    navigateToComplianceTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCPAPPO().getComplianceTabButton().click();
        });
    }
}
exports.CPAPLib = CPAPLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1BBUExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL2NwYXAvQ1BBUExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEseUVBQXNFO0FBQ3RFLG1EQUFnRDtBQUNoRCxtREFBZ0Q7QUFFaEQsTUFBYSxPQUFPO0lBS2hCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGVBQU0sRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRUQsU0FBUztRQUNMLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ1osT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQkFBZ0I7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDOUIsQ0FBQztJQUVLLHVCQUF1Qjs7WUFDekIsTUFBTSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1RCxDQUFDO0tBQUE7SUFFSyx1QkFBdUI7O1lBQ3pCLE1BQU0sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUQsQ0FBQztLQUFBO0NBQ0o7QUE5QkQsMEJBOEJDIn0=