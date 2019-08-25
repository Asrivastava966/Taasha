import { by, ElementFinder } from "protractor";
import { BaseTable } from "../base/BaseTable";

export class DatePickerPO{
    private datePickerInputElement:ElementFinder; 

    constructor(datePickerInputElement:ElementFinder) {
        this.datePickerInputElement = datePickerInputElement;
    }

    getDatePickerInputElement() {
        return this.datePickerInputElement;
    }

    getDatePickerButton(){
        return this.getDatePickerInputElement().all(by.xpath("following-sibling::span")).first().element(by.tagName('button'));
    }

    getDatePickerDropdownMenu() {
        return this.getDatePickerInputElement().all(by.xpath("following-sibling::ul")).first();
    }

    getDatePickerDropdownMenuTable() {
        return new BaseTable(this.getDatePickerDropdownMenu().element(by.tagName('table')));
    }

    getPreviousButton(){
        return this.getDatePickerDropdownMenuTable().getTableHeader().element(by.css('[ng-click=\"move(-1)\"]'));
    }

    getNextButton(){
        return this.getDatePickerDropdownMenuTable().getTableHeader().element(by.css('[ng-click=\"move(1)\"]'));
    }

    getCalendarToggleButton(){
        return this.getDatePickerDropdownMenuTable().getTableHeader().element(by.css('[ng-click=\"toggleMode()\"]'));
    }

    getCalendarTableCells(){
        return this.getDatePickerDropdownMenuTable().getTableBody().all(by.tagName('button'));
    }

    getCalendarTableCellValueElements(){
        return this.getDatePickerDropdownMenuTable().getTableBody().all(by.tagName('span'));
    }

    getActiveCalendarTableCell(){
        return this.getDatePickerDropdownMenuTable().getTableBody().element(by.css('button.active'));
    }

    getTodayButton(){
        return this.getDatePickerDropdownMenu().element(by.buttonText('Today'));
    }

    getClearButton(){
        return this.getDatePickerDropdownMenu().element(by.buttonText('Clear'));
    }

    getCloseButton(){
        return this.getDatePickerDropdownMenu().element(by.buttonText('Close'));
    }
}