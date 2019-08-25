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
class WaitUtils {
    constructor() {
        this.smallTimeout = 5000;
        this.mediumTimeout = 10000;
        this.largeTimeout = 20000;
        this.holyFKTimeout = 30000;
    }
    insertStaticWait(timeInMilliseconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.sleep(timeInMilliseconds);
        });
    }
    waitForElementToBePresent(elementFinder) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Waiting for the element:' + elementFinder.locator() + 'to be present.');
            let expectedConditions = protractor_1.protractor.ExpectedConditions;
            let timeout = this.holyFKTimeout;
            try {
                yield protractor_1.browser.wait(expectedConditions.presenceOf(elementFinder), timeout);
            }
            catch (err) {
                protractor_1.browser.logger.error(err);
            }
        });
    }
    waitForTextToBePresentInElement(elementFinder, text) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Waiting for the text: \' ' + text + ' \' to be present in the element: ' + elementFinder.locator());
            let expectedConditions = protractor_1.protractor.ExpectedConditions;
            let timeout = this.holyFKTimeout;
            try {
                yield protractor_1.browser.wait(expectedConditions.textToBePresentInElement(elementFinder, text), timeout);
            }
            catch (err) {
                protractor_1.browser.logger.error(err);
            }
        });
    }
    waitForElementToBeVisible(elementFinder) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be visible.');
            let expectedConditions = protractor_1.protractor.ExpectedConditions;
            let timeout = this.holyFKTimeout;
            try {
                yield protractor_1.browser.wait(expectedConditions.visibilityOf(elementFinder), timeout);
            }
            catch (err) {
                protractor_1.browser.logger.info(err);
            }
        });
    }
    waitForElementToBeClickable(elementFinder) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be clickable.');
            let expectedConditions = protractor_1.protractor.ExpectedConditions;
            let timeout = this.holyFKTimeout;
            try {
                yield protractor_1.browser.wait(expectedConditions.elementToBeClickable(elementFinder), timeout);
            }
            catch (err) {
                protractor_1.browser.logger.info(err);
            }
        });
    }
    waitForElementToBeSelected(elementFinder) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.logger.info('Waiting for the element: ' + elementFinder.locator() + ' to be selected.');
            let expectedConditions = protractor_1.protractor.ExpectedConditions;
            let timeout = this.holyFKTimeout;
            try {
                yield protractor_1.browser.wait(expectedConditions.elementToBeSelected(elementFinder), timeout);
            }
            catch (err) {
                protractor_1.browser.logger.error(err);
            }
        });
    }
}
exports.WaitUtils = WaitUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiV2FpdFV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcmFfYXV0b21hdGlvbi91dGlscy9XYWl0VXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUFnRTtBQUVoRSxNQUFhLFNBQVM7SUFBdEI7UUFFWSxpQkFBWSxHQUFVLElBQUksQ0FBQztRQUMzQixrQkFBYSxHQUFVLEtBQUssQ0FBQztRQUM3QixpQkFBWSxHQUFVLEtBQUssQ0FBQztRQUM1QixrQkFBYSxHQUFVLEtBQUssQ0FBQztJQXNFekMsQ0FBQztJQXBFUyxnQkFBZ0IsQ0FBQyxrQkFBeUI7O1lBQzVDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyx5QkFBeUIsQ0FBQyxhQUEyQjs7WUFDdkQsb0JBQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLGFBQWEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDO1lBRTdGLElBQUksa0JBQWtCLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztZQUN2RCxJQUFJLE9BQU8sR0FBVSxJQUFJLENBQUMsYUFBYSxDQUFDO1lBRXhDLElBQUk7Z0JBQ0EsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7YUFDN0U7WUFBQyxPQUFPLEdBQUcsRUFBRTtnQkFDVixvQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDN0I7UUFDTCxDQUFDO0tBQUE7SUFFSywrQkFBK0IsQ0FBQyxhQUEyQixFQUFFLElBQVc7O1lBQzFFLG9CQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsR0FBRyxJQUFJLEdBQUcsb0NBQW9DLEdBQUUsYUFBYSxDQUFDLE9BQU8sRUFB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