"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const SelectDropdown_1 = require("../../../../component/comp/SelectDropdown");
const DatePicker_1 = require("../../../../component/comp/DatePicker");
class CallResultPatientNoteFormPO {
    constructor(callResultPatientNoteForm) {
        this.callResultPatientNoteForm = callResultPatientNoteForm;
    }
    getCallResultPatientNoteForm() {
        return this.callResultPatientNoteForm;
    }
    getSeverityTypeSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getCallResultPatientNoteForm().element(protractor_1.by.id('inputSeverity')));
    }
    getOrderNoteSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getCallResultPatientNoteForm().element(protractor_1.by.id('inputNoteType')));
    }
    getAssignToSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getCallResultPatientNoteForm().element(protractor_1.by.name('inputAssignTo')));
    }
    getNoteStatusSelectDropdown() {
        return new SelectDropdown_1.SelectDropdown(this.getCallResultPatientNoteForm().element(protractor_1.by.id('inputNoteStatus')));
    }
    getDateNeededInputField() {
        return new DatePicker_1.DatePicker(this.getCallResultPatientNoteForm().element(protractor_1.by.name('inputActualDate')));
    }
    getNoteSubjectInputField() {
        return this.getCallResultPatientNoteForm().element(protractor_1.by.id('patieninputNoteSubject'));
    }
    getNoteDescriptionTextarea() {
        return this.getCallResultPatientNoteForm().element(protractor_1.by.id('patientinputNoteDesc'));
    }
    getSaveButton() {
        return this.getCallResultPatientNoteForm().element(protractor_1.by.buttonText('Save'));
    }
    getCancelButton() {
        return this.getCallResultPatientNoteForm().element(protractor_1.by.buttonText('Cancel'));
    }
}
exports.CallResultPatientNoteFormPO = CallResultPatientNoteFormPO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FsbFJlc3VsdFBhdGllbnROb3RlRm9ybVBPLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9wby9ob21lcGFnZS9yZXN1cHBsaWVzYnVja2V0L3Jlc3VwcGxpZXNjb250YWN0aW5mb3JtYXRpb25wYWdlL0NhbGxSZXN1bHRQYXRpZW50Tm90ZUZvcm1QTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErQztBQUMvQyw4RUFBMkU7QUFDM0Usc0VBQW1FO0FBRW5FLE1BQWEsMkJBQTJCO0lBSXBDLFlBQVkseUJBQXVDO1FBQy9DLElBQUksQ0FBQyx5QkFBeUIsR0FBRyx5QkFBeUIsQ0FBQztJQUMvRCxDQUFDO0lBRUQsNEJBQTRCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDO0lBQzFDLENBQUM7SUFFRCw2QkFBNkI7UUFDekIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCwwQkFBMEI7UUFDdEIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25HLENBQUM7SUFFRCx5QkFBeUI7UUFDckIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3JHLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLCtCQUFjLENBQUMsSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELHVCQUF1QjtRQUNuQixPQUFPLElBQUksdUJBQVUsQ0FBQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRyxDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRCwwQkFBMEI7UUFDdEIsT0FBTyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDdEYsQ0FBQztJQUVELGFBQWE7UUFDVCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVELGVBQWU7UUFDWCxPQUFPLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztDQUNKO0FBL0NELGtFQStDQyJ9