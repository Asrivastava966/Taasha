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
const PendingOrdersPO_1 = require("../../../po/homepage/pendingbucket/PendingOrdersPO");
class PendingOrdersLib {
    constructor() {
        this.pendingOrdersPO = new PendingOrdersPO_1.PendingOrdersPO();
    }
    getPendingOrdersPO() {
        return this.pendingOrdersPO;
    }
    searchViaPatientNameFilter(patientName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getPendingOrdersPO().getOrdersGrid().searchViaPatientNameFilter(patientName);
        });
    }
    getPatientName(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPendingOrdersPO().getOrdersGrid().getPatientName(rowNumber);
        });
    }
    getOrderType(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getPendingOrdersPO().getOrdersGrid().getOrderType(rowNumber).getText();
        });
    }
}
exports.PendingOrdersLib = PendingOrdersLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVuZGluZ09yZGVyc0xpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2hvbWVwYWdlL3BlbmRpbmdidWNrZXQvUGVuZGluZ09yZGVyc0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0ZBQXFGO0FBRXJGLE1BQWEsZ0JBQWdCO0lBSXpCO1FBQ0ksSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFSywwQkFBMEIsQ0FBQyxXQUFrQjs7WUFDL0MsTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM1RixDQUFDO0tBQUE7SUFFSyxjQUFjLENBQUMsU0FBZ0I7O1lBQ2pDLE9BQU8sTUFBTSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckYsQ0FBQztLQUFBO0lBRUssWUFBWSxDQUFDLFNBQWdCOztZQUMvQixPQUFPLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsYUFBYSxFQUFFLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdGLENBQUM7S0FBQTtDQUNKO0FBdkJELDRDQXVCQyJ9