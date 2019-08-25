import { ElementFinder, browser } from "protractor";
import * as fs from "fs";

export class CommonUtils{
    
    getTimeStamp() {
        let date:Date = new Date();
        let year:number = date.getFullYear();
        let month:number = date.getMonth()+1; 
        let dayOfTheMonth:number = date.getDate();

        let timeStamp = dayOfTheMonth + '-' + month + '-' + year + '-' + date.valueOf();

        return timeStamp;
    }

    /**
     * String format must be: YYYY/MM/DD
     */
    getDateFromString(dateString:string) {
        let dateSplitString: string[] = dateString.split("/",3);
        let year = +dateSplitString[0]; 
        let month = +dateSplitString[1]; 
        let date = +dateSplitString[2];
        
        return new Date(year, --month, date);
    }

    /**
     * 
     * @param offsetInMonth Only positive offset is supported.
     */
    getDateWithOffset(offsetInMonth:number) {
        let todaysDate = new Date();
        let todaysDateDay = todaysDate.getDate();
        let todaysDateMonth = todaysDate.getMonth();
        let todaysDateYear = todaysDate.getFullYear();
        let dateMonthWithOffset = todaysDateMonth + offsetInMonth;

        if(dateMonthWithOffset > 12) {
            todaysDateYear++;
        }

        return new Date(todaysDateYear, dateMonthWithOffset, todaysDateDay);
    }

    //Draw on Canvas tag 
    async drawALineOnCanvasTagElement(element:ElementFinder) { 
        browser.logger.info('Drawing a line on the Canvas element.');
        await element.click();
    }

    /**
     * 
     * @param tabIndex starts at 1
     */
    async switchBrowserTab(tabIndex:number) {
        let allBrowserWindowHandles = await browser.getAllWindowHandles();
        await browser.switchTo().window(allBrowserWindowHandles[--tabIndex]);
    }

    writeScreenShot(data:string, filename:string) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }

    async takeScreenshot(screenshotTitle:string) {
        let screenshotName = 'Screenshot_' + screenshotTitle + '_' + this.getTimeStamp() + '.png';
        let screenshotData = await browser.takeScreenshot();

        this.writeScreenShot(screenshotData, screenshotName);
    }

    async scrollIntoView(element:ElementFinder) {
        await browser.executeScript("arguments[0].scrollIntoView();", element);
    }
}


