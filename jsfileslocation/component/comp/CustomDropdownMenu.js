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
const CustomDropdownMenuOrigin_1 = require("../../data/enums/CustomDropdownMenuOrigin");
class CustomDropdownMenu {
    constructor(customDropdownMenu, dropdownMenuOrigin) {
        this.customDropdownMenuToggle = customDropdownMenu;
        this.dropdownMenuOrigin = dropdownMenuOrigin;
    }
    getCustomDropdownMenuToggle() {
        return this.customDropdownMenuToggle;
    }
    getCustomDropdownMenu() {
        return this.getCustomDropdownMenuToggle().all(protractor_1.by.xpath("following-sibling::ul")).first();
    }
    getCustomDropdownMenuOptions() {
        return this.getCustomDropdownMenu().all(protractor_1.by.tagName('li'));
    }
    getCustomDropdownMenuOptionsCount() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getCustomDropdownMenuOptions().count();
        });
    }
    /**
     *
     * @param index starts at 1
     */
    getCustomDropdownMenuOptionLinkText(index) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getCustomDropdownMenuOptions().get(--index).element(protractor_1.by.tagName('a')).getText();
        });
    }
    /**
     *
     * @param index starts at 1
     */
    selectDropdownMenuOptionByIndex(index) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getCustomDropdownMenuOptions().get(--index).click();
        });
    }
    selectDropdownMenuOptionByLinkText(linkText) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.dropdownMenuOrigin == CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.INPUT_FIELD) {
                yield this.getCustomDropdownMenuToggle().sendKeys(linkText);
            }
            else {
                yield this.getCustomDropdownMenuToggle().click();
            }
            let dropdownMenuOptionsCount = yield this.getCustomDropdownMenuOptionsCount();
            for (let i = 1; i <= dropdownMenuOptionsCount; i++) {
                let dropdownMenuOptionLinkText = yield this.getCustomDropdownMenuOptionLinkText(i);
                if (dropdownMenuOptionLinkText.includes(linkText)) {
                    yield this.selectDropdownMenuOptionByIndex(i);
                    break;
                }
            }
        });
    }
}
exports.CustomDropdownMenu = CustomDropdownMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ3VzdG9tRHJvcGRvd25NZW51LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9DdXN0b21Ecm9wZG93bk1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQyx3RkFBcUY7QUFFckYsTUFBYSxrQkFBa0I7SUFJM0IsWUFBWSxrQkFBZ0MsRUFBRSxrQkFBMkM7UUFDckYsSUFBSSxDQUFDLHdCQUF3QixHQUFHLGtCQUFrQixDQUFDO1FBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxrQkFBa0IsQ0FBQztJQUNqRCxDQUFDO0lBRU8sMkJBQTJCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixDQUFDO0lBQ3pDLENBQUM7SUFFTyxxQkFBcUI7UUFDekIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDN0YsQ0FBQztJQUVPLDRCQUE0QjtRQUNoQyxPQUFPLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVhLGlDQUFpQzs7WUFDM0MsT0FBTyxNQUFNLElBQUksQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdELENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNXLG1DQUFtQyxDQUFDLEtBQVk7O1lBQzFELE9BQU8sTUFBTSxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3JHLENBQUM7S0FBQTtJQUVEOzs7T0FHRztJQUNHLCtCQUErQixDQUFDLEtBQVk7O1lBQzlDLE1BQU0sSUFBSSxDQUFDLDRCQUE0QixFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkUsQ0FBQztLQUFBO0lBRUssa0NBQWtDLENBQUMsUUFBZTs7WUFDcEQsSUFBRyxJQUFJLENBQUMsa0JBQWtCLElBQUksbURBQXdCLENBQUMsV0FBVyxFQUFFO2dCQUNoRSxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvRDtpQkFDRztnQkFDQSxNQUFNLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBQ3BEO1lBRUQsSUFBSSx3QkFBd0IsR0FBRyxNQUFNLElBQUksQ0FBQyxpQ0FBaUMsRUFBRSxDQUFDO1lBRTlFLEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBRSx3QkFBd0IsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDM0MsSUFBSSwwQkFBMEIsR0FBRyxNQUFNLElBQUksQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFbkYsSUFBRywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQzlDLE1BQU0sSUFBSSxDQUFDLCtCQUErQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM5QyxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQTVERCxnREE0REMifQ==