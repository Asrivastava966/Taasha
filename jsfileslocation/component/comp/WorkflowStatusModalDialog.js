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
const protractor_1 = require("protractor");
const BaseModal_1 = require("../base/BaseModal");
const SelectDropdown_1 = require("./SelectDropdown");
const DatePicker_1 = require("./DatePicker");
const CommonUtils_1 = require("../../utils/CommonUtils");
class WorkflowStatusModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
        this.commonUtils = new CommonUtils_1.CommonUtils();
    }
    getCommonUtils() {
        return this.commonUtils;
    }
    getCloseButton() {
        return this.getModalHeader().element(protractor_1.by.tagName('button'));
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCloseButton().click();
        });
    }
    //Order Info
    getOrderOwnerSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getModalBody().element(protractor_1.by.model('workflowStatusRequest.orderOwnerId')));
    }
    selectOrderOwner(orderOwner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getOrderOwnerSelectDropdown().selectOption(orderOwner);
        });
    }
    getAssignToSelectDropdown() {
        return this.getModalBody().element(protractor_1.by.model('workflowStatusRequest.employeeId'));
    }
    selectAssignTo(assignTo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getAssignToSelectDropdown().selectOption(assignTo);
        });
    }
    getStatusSelectDropdown() {
        return this.getModalBody().element(protractor_1.by.model('workflowStatusRequest.workFlowNm'));
    }
    selectStatus(workflowStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getStatusSelectDropdown().selectOption(workflowStatus);
        });
    }
    getDateNeededDatePicker() {
        return new DatePicker_1.DatePicker(this.getModalBody().element(protractor_1.by.model('workflowStatusRequest.dateNeeded')));
    }
    selectDateNeeded(dateNeeded) {
        return __awaiter(this, void 0, void 0, function* () {
            let isDatePickerSmall = false;
            yield this.getDateNeededDatePicker().selectDate(dateNeeded, isDatePickerSmall);
        });
    }
    getSaveButton() {
        return this.getModalContent().element(protractor_1.by.buttonText('Save'));
    }
    save() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCommonUtils().scrollIntoView(this.getSaveButton());
            yield this.getSaveButton().click();
        });
    }
}
exports.WorkflowStatusModalDialog = WorkflowStatusModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV29ya2Zsb3dTdGF0dXNNb2RhbERpYWxvZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vY29tcG9uZW50L2NvbXAvV29ya2Zsb3dTdGF0dXNNb2RhbERpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStDO0FBQy9DLGlEQUE4QztBQUM5QyxxREFBa0Q7QUFDbEQsNkNBQTBDO0FBRTFDLHlEQUFzRDtBQUV0RCxNQUFhLHlCQUEwQixTQUFRLHFCQUFTO0lBR3BELFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDekMsQ0FBQztJQUVPLGNBQWM7UUFDbEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFTyxjQUFjO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVLLEtBQUs7O1lBQ1AsTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUQsWUFBWTtJQUNKLDJCQUEyQjtRQUMvQixPQUFPLElBQUksK0JBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0csQ0FBQztJQUVLLGdCQUFnQixDQUFDLFVBQWlCOztZQUNwQyxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFTyx5QkFBeUI7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFSyxjQUFjLENBQUMsUUFBZTs7WUFDaEMsTUFBTSxJQUFJLENBQUMseUJBQXlCLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEUsQ0FBQztLQUFBO0lBRU8sdUJBQXVCO1FBQzNCLE9BQU8sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQztJQUNyRixDQUFDO0lBRUssWUFBWSxDQUFDLGNBQTBDOztZQUN6RCxNQUFNLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLFlBQVksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN0RSxDQUFDO0tBQUE7SUFFTyx1QkFBdUI7UUFDM0IsT0FBTyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFSyxnQkFBZ0IsQ0FBQyxVQUFlOztZQUNsQyxJQUFJLGlCQUFpQixHQUFHLEtBQUssQ0FBQztZQUM5QixNQUFNLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztRQUNuRixDQUFDO0tBQUE7SUFFTyxhQUFhO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVLLElBQUk7O1lBQ04sTUFBTSxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3ZDLENBQUM7S0FBQTtDQUNKO0FBOURELDhEQThEQyJ9