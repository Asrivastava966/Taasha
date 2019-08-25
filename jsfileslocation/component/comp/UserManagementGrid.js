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
const BaseGrid_1 = require("../base/BaseGrid");
class UserManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.actionColumnIndex = 7;
    }
    getActionCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }
    updateUser(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.css('[title=\"Update User\"]'));
        });
    }
    deleteUser(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.css('[title=\"Delete User\"]'));
        });
    }
    resetPasswordOfUser(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.css('[title=\"Reset Password\"]'));
        });
    }
}
exports.UserManagementGrid = UserManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlck1hbmFnZW1lbnRHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9Vc2VyTWFuYWdlbWVudEdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQywrQ0FBNEM7QUFFNUMsTUFBYSxrQkFBbUIsU0FBUSxtQkFBUTtJQUc1QyxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUhmLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRU8sYUFBYSxDQUFDLFNBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRVksVUFBVSxDQUFDLFNBQWdCOztZQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDO1FBQ25GLENBQUM7S0FBQTtJQUVZLFVBQVUsQ0FBQyxTQUFnQjs7WUFDcEMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUNuRixDQUFDO0tBQUE7SUFFWSxtQkFBbUIsQ0FBQyxTQUFnQjs7WUFDN0MsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztRQUN0RixDQUFDO0tBQUE7Q0FDSjtBQXRCRCxnREFzQkMifQ==