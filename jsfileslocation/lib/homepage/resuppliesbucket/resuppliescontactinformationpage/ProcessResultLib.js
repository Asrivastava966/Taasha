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
const WaitUtils_1 = require("../../../../utils/WaitUtils");
const ProcessResultPO_1 = require("../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/ProcessResultPO");
class ProcessResultLib {
    constructor() {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.processResultPO = new ProcessResultPO_1.ProcessResultPO();
    }
    getWaitUtils() {
        return this.waitUtils;
    }
    getProcessResultPO() {
        return this.processResultPO;
    }
    navigateToPreviousTab() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getPreviousButton().click();
        });
    }
    submitToVGM() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getSubmitToVGMButton().click();
        });
    }
    cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getCancelButton().click();
        });
    }
    finish() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getFinishButton().click();
            yield this.getWaitUtils().insertStaticWait(2000);
        });
    }
    //Workflow Status modal-dialog
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getWorkflowStatusModalDialog().close();
        });
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getProcessResultPO().getWorkflowStatusModalDialog().save();
        });
    }
}
exports.ProcessResultLib = ProcessResultLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvY2Vzc1Jlc3VsdExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2hvbWVwYWdlL3Jlc3VwcGxpZXNidWNrZXQvcmVzdXBwbGllc2NvbnRhY3RpbmZvcm1hdGlvbnBhZ2UvUHJvY2Vzc1Jlc3VsdExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkRBQXdEO0FBQ3hELCtIQUE0SDtBQUU1SCxNQUFhLGdCQUFnQjtJQUl6QjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsWUFBWTtRQUNSLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ2hDLENBQUM7SUFFSyxxQkFBcUI7O1lBQ3ZCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNoRSxDQUFDO0tBQUE7SUFFSyxXQUFXOztZQUNiLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuRSxDQUFDO0tBQUE7SUFFSyxNQUFNOztZQUNSLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUQsQ0FBQztLQUFBO0lBRUssTUFBTTs7WUFDUixNQUFNLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzFELE1BQU0sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUVELDhCQUE4QjtJQUN4QixLQUFLOztZQUNQLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMzRSxDQUFDO0tBQUE7SUFFSyxJQUFJOztZQUNOLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxRSxDQUFDO0tBQUE7Q0FDSjtBQTFDRCw0Q0EwQ0MifQ==