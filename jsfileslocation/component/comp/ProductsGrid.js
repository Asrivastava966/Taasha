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
class ProductsGrid extends BaseGrid_1.BaseGrid {
    constructor(gridElement) {
        super(gridElement);
        this.qtyColumnIndex = 1;
        this.uomColumnIndex = 2;
        this.hcpcsColumnIndex = 3;
        this.prColumnIndex = 4;
        this.manufacturerColumnIndex = 5;
        this.actionColumnIndex = 11;
        //grid-settings
        this.saveGridSettingButton = protractor_1.element(protractor_1.by.css('[ng-click=\"saveState()\"]'));
    }
    getSaveGridSettingButton() {
        return this.saveGridSettingButton;
    }
    //TO-DO :: grid-settings methods 
    //grid-menu
    getGridMenuButton() {
        return this.getGridContentsWrapper().element(protractor_1.by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods
    getGridContainer() {
        return this.getGridContentsWrapper().all(protractor_1.by.css('[role=\"grid\"]')).get(1);
    }
    getHCPCSHeaderCell() {
        return this.getGridHeaderCells().get((this.hcpcsColumnIndex - 1));
    }
    getHCPCSFilter() {
        return this.getHCPCSHeaderCell().element(protractor_1.by.className('ui-grid-filter-input'));
    }
    searchViaHCPCSFilter(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getHCPCSFilter().clear();
            yield this.getHCPCSFilter().sendKeys(hcpcsCode);
        });
    }
    getManufacturerHeaderCell() {
        return this.getGridHeaderCells().get((this.manufacturerColumnIndex - 1));
    }
    getManufacturerFilter() {
        return this.getManufacturerHeaderCell().element(protractor_1.by.className('ui-grid-filter-input'));
    }
    searchViaManufacturerFilter(manufacturerName) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getManufacturerFilter().clear();
            yield this.getManufacturerFilter().sendKeys(manufacturerName);
        });
    }
    /**
     *
     * @param rowNumber start at 1
     */
    getQTYValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.qtyColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    /**
     *
     * @param rowNumber start at 1
     */
    getHCPCSValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.hcpcsColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    /**
     *
     * @param rowNumber start at 1
     */
    getPRValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.prColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    /**
     *
     * @param rowNumber start at 1
     */
    getManufacturerValue(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getGridBodyRowCell(rowNumber, this.manufacturerColumnIndex).element(protractor_1.by.className('ui-grid-cell-contents')).getText();
        });
    }
    //Workflow methods
    updateProduct(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Update Product\"]')).click();
        });
    }
    updateProductUsingHCPCSCode(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.searchViaHCPCSFilter(hcpcsCode);
            yield this.updateProduct(firstRowIndex);
        });
    }
    deleteProduct(rowNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(protractor_1.by.css('[title=\"Delete Product\"]')).click();
        });
    }
    deleteProductUsingHCPCSCode(hcpcsCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.searchViaHCPCSFilter(hcpcsCode);
            yield this.deleteProduct(firstRowIndex);
            yield this.getHCPCSFilter().clear();
        });
    }
    deleteProductUsingManufacturerName(manufacturerName) {
        return __awaiter(this, void 0, void 0, function* () {
            let firstRowIndex = 1;
            yield this.searchViaManufacturerFilter(manufacturerName);
            yield this.deleteProduct(firstRowIndex);
            yield this.getManufacturerFilter().clear();
        });
    }
}
exports.ProductsGrid = ProductsGrid;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZHVjdHNHcmlkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9jb21wb25lbnQvY29tcC9Qcm9kdWN0c0dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDJDQUF3RDtBQUN4RCwrQ0FBNEM7QUFHNUMsTUFBYSxZQUFhLFNBQVEsbUJBQVE7SUFRdEMsWUFBWSxXQUF5QjtRQUNqQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFSZixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixtQkFBYyxHQUFHLENBQUMsQ0FBQztRQUNuQixxQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFDckIsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEIsNEJBQXVCLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLEVBQUUsQ0FBQztRQU0vQixlQUFlO1FBQ1AsMEJBQXFCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQztJQUg5RSxDQUFDO0lBSUQsd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RDLENBQUM7SUFDRCxpQ0FBaUM7SUFFakMsV0FBVztJQUNILGlCQUFpQjtRQUNyQixPQUFPLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBQ0QsbUNBQW1DO0lBRW5DLGdCQUFnQjtRQUNaLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRU8sa0JBQWtCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixFQUFFLENB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