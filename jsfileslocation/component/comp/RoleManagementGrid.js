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
class RoleManagementGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.actionColumnIndex = 6;
    }
    getActionCell(rowNumber) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }
    updateRole(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getActionCell(rowNumber).element(protractor_1.by.className('streamline-file-edit-2'));
        });
    }
}
exports.RoleManagementGrid = RoleManagementGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZU1hbmFnZW1lbnRHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9Sb2xlTWFuYWdlbWVudEdyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUErQztBQUMvQywrQ0FBNEM7QUFFNUMsTUFBYSxrQkFBbUIsU0FBUSxtQkFBUTtJQUk1QyxZQUFZLFdBQXlCO1FBQ2pDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUhmLHNCQUFpQixHQUFHLENBQUMsQ0FBQztJQUk5QixDQUFDO0lBRU8sYUFBYSxDQUFDLFNBQWdCO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRVksVUFBVSxDQUFDLFNBQWdCOztZQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7S0FBQTtDQUNKO0FBZkQsZ0RBZUMifQ==