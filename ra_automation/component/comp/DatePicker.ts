import { ElementFinder, ElementArrayFinder } from "protractor";
import { DatePickerPO } from "../po/DatePickerPO";
import { WaitUtils } from "../../utils/WaitUtils";

export class DatePicker{
    waitUtils:WaitUtils;
    datePickerPO:DatePickerPO;

    constructor(datePickerInputElement:ElementFinder) {
        this.waitUtils = new WaitUtils();
        this.datePickerPO = new DatePickerPO(datePickerInputElement);
    }

    getWaitUtils() {
        return this.waitUtils;
    }

    getDatePickerPO(){
        return this.datePickerPO;
    }

    async selectYear(defaultDatePickerYear:number, year:number, isDatePickerSmall: boolean) {
        await this.getDatePickerPO().getCalendarToggleButton().click();

        if(year < defaultDatePickerYear) {
            await this.getDatePickerPO().getCalendarToggleButton().click();
            if(isDatePickerSmall) {
                if(year < 2000) {
                    await this.getDatePickerPO().getPreviousButton().click();
                }

                let yearString = year.toString();
                year = +yearString.substring(2, 4);
            }

            for(let i=0; i<5; i++) {
                let firstCellIndex = 1;
                let firstCellValueString = await this.getDatePickerPO().getCalendarTableCellValueElements().get(--firstCellIndex).getText();
                let firstCellValue = +firstCellValueString;
                if(year < firstCellValue) {
                    await this.getDatePickerPO().getPreviousButton().click();
                } else {
                    break;
                }  
            }

            let totalCellCount:number = 20;
            for(let i=0; i<totalCellCount; i++ ) {
                let cellValueString = await this.getDatePickerPO().getCalendarTableCellValueElements().get(i).getText();
                let cellValue = +cellValueString;
                if(year == cellValue) {
                    await this.getDatePickerPO().getCalendarTableCells().get(i).click();
                    break;
                }
            }
        }
        else if(year > defaultDatePickerYear) {
            await this.getDatePickerPO().getCalendarToggleButton().click();

            for(let i=0; i<5; i++) {
                let lastCellIndex = 20;
                let lastCellValueString = await this.getDatePickerPO().getCalendarTableCellValueElements().get(--lastCellIndex).getText();
                let lastCellValue = +lastCellValueString;
                if(year > lastCellValue) {
                    await this.getDatePickerPO().getNextButton().click();
                } else {
                    break;
                }  
            }

            let totalCellCount:number = 20;
            for(let i=0; i<totalCellCount; i++ ) {
                let cellValueString = await this.getDatePickerPO().getCalendarTableCellValueElements().get(i).getText();
                let cellValue = +cellValueString;
                if(year == cellValue) {
                    await this.getDatePickerPO().getCalendarTableCells().get(i).click();
                    break;
                }
            }
        }
    }

    async selectMonth(month:number) {
        await this.getDatePickerPO().getCalendarTableCells().get(month).click(); 
    }

    async selectDateOfTheMonth(date:number) {
        let totalCellCount:number = 42;
        let classAttributeValue:string;
        let calendarCellElements: ElementArrayFinder = this.getDatePickerPO().getCalendarTableCells();
        let calendarCellValueElements: ElementArrayFinder = this.getDatePickerPO().getCalendarTableCellValueElements();

        for(let i=0; i<totalCellCount; i++ ) {
            classAttributeValue = await calendarCellValueElements.get(i).getAttribute('class'); 

            if(classAttributeValue.includes('text-muted')){

            }else {
                let cellValueString = await calendarCellValueElements.get(i).getText(); 
                let cellValue = +cellValueString;
                if(date == cellValue) {
                    await calendarCellElements.get(i).click();
                    break;
                }
            }
        }
    }

    async selectDate(dateObject: Date, isDatePickerSmall: boolean) {
        await this.getWaitUtils().waitForElementToBeClickable(this.getDatePickerPO().getDatePickerButton());
        await this.getDatePickerPO().getDatePickerButton().click();

        let datePickerToggleElementText = await this.getDatePickerPO().getCalendarToggleButton().getText();
        let datePickerToggleElementTextArray = datePickerToggleElementText.split(" ");
        let defaultDatePickerYear = +datePickerToggleElementTextArray[1];

        await this.selectYear(defaultDatePickerYear, dateObject.getFullYear(), isDatePickerSmall);
        await this.selectMonth(dateObject.getMonth());
        await this.selectDateOfTheMonth(dateObject.getDate());
    }

    async selectToday() {
        await this.getWaitUtils().waitForElementToBeClickable(this.getDatePickerPO().getDatePickerButton());
        await this.getDatePickerPO().getDatePickerButton().click();
        await this.getDatePickerPO().getTodayButton().click();
    }
}