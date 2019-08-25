import { element, by, ElementFinder } from "protractor";
import { BaseModal } from "../base/BaseModal";
import { OrderForms } from "../../data/enums/OrderForms";

export class OpenFormsModalDialog extends BaseModal {
    constructor(modalDialog:ElementFinder) {
        super(modalDialog);
    }
    
    async closeFormsModalDialog() {
        await this.getModalHeader().element(by.className('close')).click();
    }

    private static allFormsCheckbox = element(by.model('forms.all'));
    private static deliveryTicketCheckbox = element(by.model('forms.deliveryTicketForm'));
    private static abnFormCheckbox = element(by.model('forms.abnForm'));
    private static planOfCareCheckbox = element(by.model('forms.planOfCareForm'));
    private static patientSurveyCheckbox = element(by.model('forms.patientSurveyForm'));

    async selectForm(orderForm:OrderForms) {
        switch(orderForm) {
            case OrderForms.ALL_FORMS: {
                await OpenFormsModalDialog.allFormsCheckbox.click();
                break;
            }

            case OrderForms.DELIVERY_TICKET: {
                await OpenFormsModalDialog.deliveryTicketCheckbox.click();
                break;
            }

            case OrderForms.ABN_FORM: {
                await OpenFormsModalDialog.abnFormCheckbox.click();
                break;
            }

            case OrderForms.PLAN_OF_CARE: {
                await OpenFormsModalDialog.planOfCareCheckbox.click();
                break;
            }

            case OrderForms.PATIENT_SURVEY: {
                await OpenFormsModalDialog.patientSurveyCheckbox.click();
                break;
            }
        }
    }

    async openForm() {
        await this.getModalFooter().element(by.buttonText('Open Forms')).click();
    }
}