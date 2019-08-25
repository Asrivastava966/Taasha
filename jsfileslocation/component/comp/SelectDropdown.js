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
const WaitUtils_1 = require("../../utils/WaitUtils");
class SelectDropdown {
    constructor(dropdownElement) {
        this.waitUtils = new WaitUtils_1.WaitUtils();
        this.selectDropdownElement = dropdownElement;
    }
    getDropdownElement() {
        return this.selectDropdownElement;
    }
    selectOption(option) {
        return __awaiter(this, void 0, void 0, function* () {
            if (yield this.selectDropdownElement.element(protractor_1.by.cssContainingText('option', option)).isDisplayed()) {
                yield this.selectDropdownElement.element(protractor_1.by.cssContainingText('option', option)).click();
            }
            else {
                protractor_1.browser.log('The option: ' + option + ' is not available in the dropdown.');
            }
        });
    }
    selectOptionByIndex(optionIndex) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.selectDropdownElement.all(protractor_1.by.tagName('option')).get(optionIndex).click();
        });
    }
}
exports.SelectDropdown = SelectDropdown;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0RHJvcGRvd24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2NvbXBvbmVudC9jb21wL1NlbGVjdERyb3Bkb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwyQ0FBd0Q7QUFDeEQscURBQWtEO0FBRWxELE1BQWEsY0FBYztJQUl2QixZQUFZLGVBQTZCO1FBQ3JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGVBQWUsQ0FBQztJQUNqRCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2QsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUM7SUFDdEMsQ0FBQztJQUVLLFlBQVksQ0FBQyxNQUFjOztZQUM3QixJQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQy9GLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDNUY7aUJBQU07Z0JBQ0gsb0JBQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLE1BQU0sR0FBRyxvQ0FBb0MsQ0FBQyxDQUFDO2FBQy9FO1FBQ0wsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsV0FBbUI7O1lBQ3pDLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3hGLENBQUM7S0FBQTtDQUNKO0FBeEJELHdDQXdCQyJ9