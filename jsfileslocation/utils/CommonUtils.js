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
const fs = require("fs");
class CommonUtils {
    getTimeStamp() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let dayOfTheMonth = date.getDate();
        let timeStamp = dayOfTheMonth + '-' + month + '-' + year + '-' + date.valueOf();
        return timeStamp;
    }
    /**
     * String format must be: YYYY/MM/DD
     */
    getDateFromString(dateString) {
        let dateSplitString = dateString.split("/", 3);
        let year = +dateSplitString[0];
        let month = +dateSplitString[1];
        let date = +dateSplitString[2];
        return new Date(year, --month, date);
    }
    /**
     *
     * @param offsetInMonth Only positive offset is supported.
     */
    getDateWithOffset(offsetInMonth) {
        let todaysDate = new Date();
        let todaysDateDay = todaysDate.getDate();
        let todaysDateMonth = todaysDate.getMonth();
        let todaysDateYear = todaysDate.getFullYear();
        let dateMonthWithOffset = todaysDateMonth + offsetInMonth;
        if (dateMonthWithOffset > 12) {
            todaysDateYear++;
        }
        return new Date(todaysDateYear, dateMonthWithOffset, todaysDateDay);
    }
    //Draw on Canvas tag 
    drawALineOnCanvasTagElement(element) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Drawing a line on the Canvas element.');
            yield element.click();
        });
    }
    /**
     *
     * @param tabIndex starts at 1
     */
    switchBrowserTab(tabIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            let allBrowserWindowHandles = yield protractor_1.browser.getAllWindowHandles();
            yield protractor_1.browser.switchTo().window(allBrowserWindowHandles[--tabIndex]);
        });
    }
    writeScreenShot(data, filename) {
        let stream = fs.createWriteStream(filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
    takeScreenshot(screenshotTitle) {
        return __awaiter(this, void 0, void 0, function* () {
            let screenshotName = 'Screenshot_' + screenshotTitle + '_' + this.getTimeStamp() + '.png';
            let screenshotData = yield protractor_1.browser.takeScreenshot();
            this.writeScreenShot(screenshotData, screenshotName);
        });
    }
    scrollIntoView(element) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.executeScript("arguments[0].scrollIntoView();", element);
        });
    }
}
exports.CommonUtils = CommonUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9yYV9hdXRvbWF0aW9uL3V0aWxzL0NvbW1vblV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBb0Q7QUFDcEQseUJBQXlCO0FBRXpCLE1BQWEsV0FBVztJQUVwQixZQUFZO1FBQ1IsSUFBSSxJQUFJLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUMzQixJQUFJLElBQUksR0FBVSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDckMsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLGFBQWEsR0FBVSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFMUMsSUFBSSxTQUFTLEdBQUcsYUFBYSxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWhGLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRztJQUNILGlCQUFpQixDQUFDLFVBQWlCO1FBQy9CLElBQUksZUFBZSxHQUFhLFVBQVUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELElBQUksSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLElBQUksS0FBSyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLElBQUksSUFBSSxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxhQUFvQjtRQUNsQyxJQUFJLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksYUFBYSxHQUFHLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QyxJQUFJLGVBQWUsR0FBRyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsSUFBSSxjQUFjLEdBQUcsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlDLElBQUksbUJBQW1CLEdBQUcsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUUxRCxJQUFHLG1CQUFtQixHQUFHLEVBQUUsRUFBRTtZQUN6QixjQUFjLEVBQUUsQ0FBQztTQUNwQjtRQUVELE9BQU8sSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxxQkFBcUI7SUFDZiwyQkFBMkIsQ0FBQyxPQUFxQjs7WUFDbkQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDN0QsTUFBTSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUQ7OztPQUdHO0lBQ0csZ0JBQWdCLENBQUMsUUFBZTs7WUFDbEMsSUFBSSx1QkFBdUIsR0FBRyxNQUFNLG9CQUFPLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUNsRSxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN6RSxDQUFDO0tBQUE7SUFFRCxlQUFlLENBQUMsSUFBVyxFQUFFLFFBQWU7UUFDeEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFSyxjQUFjLENBQUMsZUFBc0I7O1lBQ3ZDLElBQUksY0FBYyxHQUFHLGFBQWEsR0FBRyxlQUFlLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsR0FBRyxNQUFNLENBQUM7WUFDMUYsSUFBSSxjQUFjLEdBQUcsTUFBTSxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXBELElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7S0FBQTtJQUVLLGNBQWMsQ0FBQyxPQUFxQjs7WUFDdEMsTUFBTSxvQkFBTyxDQUFDLGFBQWEsQ0FBQyxnQ0FBZ0MsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUMzRSxDQUFDO0tBQUE7Q0FDSjtBQTFFRCxrQ0EwRUMifQ==