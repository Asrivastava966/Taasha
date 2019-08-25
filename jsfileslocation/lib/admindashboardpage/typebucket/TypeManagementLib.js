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
const TypeManagementPO_1 = require("../../../po/admindashboardpage/typesbucket/TypeManagementPO");
const protractor_1 = require("protractor");
class TypeManagementLib {
    constructor() {
        this.typeManagement = new TypeManagementPO_1.TypeManagementPO();
    }
    SelectType(option) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeManagement.getSelectTypeDropdown().selectOption(option);
        });
    }
    clickGoButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeManagement.getGoButton().click();
        });
    }
    clickAdminDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeManagement.getAdminDashboardButton().click();
        });
    }
    clickAddNewTypeButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.typeManagement.getAddNewtypeButton().click();
        });
    }
    clickOnEditButton(description) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.element.all(protractor_1.by.repeater("result in results")).each(function (item) {
                item.element(protractor_1.by.css("td[data-title-text='Description']")).getText().then(function (text) {
                    if (text == description) {
                        item.element(protractor_1.by.css("a[ng-click='getTypeForEditing(result.typeRefId)']")).click();
                    }
                });
            });
        });
    }
}
exports.TypeManagementLib = TypeManagementLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwZU1hbmFnZW1lbnRMaWIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2xpYi9hZG1pbmRhc2hib2FyZHBhZ2UvdHlwZWJ1Y2tldC9UeXBlTWFuYWdlbWVudExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsa0dBQTRGO0FBRTVGLDJDQUF3QztBQUV4QyxNQUFhLGlCQUFpQjtJQUcxQjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFBO0lBQzlDLENBQUM7SUFFSSxVQUFVLENBQUMsTUFBYTs7WUFDM0IsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hFLENBQUM7S0FBQTtJQUVJLGFBQWE7O1lBQ2YsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ2xELENBQUM7S0FBQTtJQUVJLG1CQUFtQjs7WUFDckIsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLHVCQUF1QixFQUFFLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDOUQsQ0FBQztLQUFBO0lBRUkscUJBQXFCOztZQUN2QixNQUFNLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUMxRCxDQUFDO0tBQUE7SUFFSyxpQkFBaUIsQ0FBQyxXQUFXOztZQUMvQixvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO2dCQUNqRSxJQUFJLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7b0JBQ2xGLElBQUcsSUFBSSxJQUFFLFdBQVcsRUFDcEI7d0JBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1EQUFtRCxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtxQkFDcEY7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFDRixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQU1KO0FBdENELDhDQXNDQyJ9