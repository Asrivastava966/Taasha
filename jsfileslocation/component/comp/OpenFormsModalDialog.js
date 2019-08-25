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
const OrderForms_1 = require("../../data/enums/OrderForms");
class OpenFormsModalDialog extends BaseModal_1.BaseModal {
    constructor(modalDialog) {
        super(modalDialog);
    }
    closeFormsModalDialog() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalHeader().element(protractor_1.by.className('close')).click();
        });
    }
    selectForm(orderForm) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (orderForm) {
                case OrderForms_1.OrderForms.ALL_FORMS: {
                    yield OpenFormsModalDialog.allFormsCheckbox.click();
                    break;
                }
                case OrderForms_1.OrderForms.DELIVERY_TICKET: {
                    yield OpenFormsModalDialog.deliveryTicketCheckbox.click();
                    break;
                }
                case OrderForms_1.OrderForms.ABN_FORM: {
                    yield OpenFormsModalDialog.abnFormCheckbox.click();
                    break;
                }
                case OrderForms_1.OrderForms.PLAN_OF_CARE: {
                    yield OpenFormsModalDialog.planOfCareCheckbox.click();
                    break;
                }
                case OrderForms_1.OrderForms.PATIENT_SURVEY: {
                    yield OpenFormsModalDialog.patientSurveyCheckbox.click();
                    break;
                }
            }
        });
    }
    openForm() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getModalFooter().element(protractor_1.by.buttonText('Open Forms')).click();
        });
    }
}
OpenFormsModalDialog.allFormsCheckbox = protractor_1.element(protractor_1.by.model('forms.all'));
OpenFormsModalDialog.deliveryTicketCheckbox = protractor_1.element(protractor_1.by.model('forms.deliveryTicketForm'));
OpenFormsModalDialog.abnFormCheckbox = protractor_1.element(protractor_1.by.model('forms.abnForm'));
OpenFormsModalDialog.planOfCareCheckbox = protractor_1.element(protractor_1.by.model('forms.planOfCareForm'));
OpenFormsModalDialog.patientSurveyCheckbox = protractor_1.element(protractor_1.by.model('forms.patientSurveyForm'));
exports.OpenFormsModalDialog = OpenFormsModalDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3BlbkZvcm1zTW9kYWxEaWFsb2cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL09wZW5Gb3Jtc01vZGFsRGlhbG9nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQsaURBQThDO0FBQzlDLDREQUF5RDtBQUV6RCxNQUFhLG9CQUFxQixTQUFRLHFCQUFTO0lBQy9DLFlBQVksV0FBeUI7UUFDakMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFSyxxQkFBcUI7O1lBQ3ZCLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdkUsQ0FBQztLQUFBO0lBUUssVUFBVSxDQUFDLFNBQW9COztZQUNqQyxRQUFPLFNBQVMsRUFBRTtnQkFDZCxLQUFLLHVCQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ3BELE1BQU07aUJBQ1Q7Z0JBRUQsS0FBSyx1QkFBVSxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUM3QixNQUFNLG9CQUFvQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMxRCxNQUFNO2lCQUNUO2dCQUVELEtBQUssdUJBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDdEIsTUFBTSxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ25ELE1BQU07aUJBQ1Q7Z0JBRUQsS0FBSyx1QkFBVSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUMxQixNQUFNLG9CQUFvQixDQUFDLGtCQUFrQixDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0RCxNQUFNO2lCQUNUO2dCQUVELEtBQUssdUJBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztvQkFDNUIsTUFBTSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekQsTUFBTTtpQkFDVDthQUNKO1FBQ0wsQ0FBQztLQUFBO0lBRUssUUFBUTs7WUFDVixNQUFNLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdFLENBQUM7S0FBQTs7QUFyQ2MscUNBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7QUFDbEQsMkNBQXNCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztBQUN2RSxvQ0FBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQ3JELHVDQUFrQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7QUFDL0QsMENBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztBQWJ4RixvREErQ0MifQ==