import { element, by, ElementFinder } from "protractor";
import { BaseGrid } from "../base/BaseGrid";
import { ProductManufacturer } from "../../data/enums/ProductManufacturer";

export class ProductsGrid extends BaseGrid {
    private qtyColumnIndex = 1; 
    private uomColumnIndex = 2;
    private hcpcsColumnIndex = 3; 
    private prColumnIndex = 4; 
    private manufacturerColumnIndex = 5;
    private actionColumnIndex = 11; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    //grid-settings
    private saveGridSettingButton = element(by.css('[ng-click=\"saveState()\"]')); 
    getSaveGridSettingButton() {
        return this.saveGridSettingButton;
    }
    //TO-DO :: grid-settings methods 

    //grid-menu
    private getGridMenuButton() {
        return this.getGridContentsWrapper().element(by.className('ui-grid-menu-button'));
    }
    //TO-DO :: grid-menu button methods

    getGridContainer() {
        return this.getGridContentsWrapper().all(by.css('[role=\"grid\"]')).get(1);
    }
    
    private getHCPCSHeaderCell() {
        return this.getGridHeaderCells().get((this.hcpcsColumnIndex-1));
    }

    private getHCPCSFilter(){
        return this.getHCPCSHeaderCell().element(by.className('ui-grid-filter-input'));
    }

    async searchViaHCPCSFilter(hcpcsCode:string){
        await this.getHCPCSFilter().clear();
        await this.getHCPCSFilter().sendKeys(hcpcsCode);
    }

    private getManufacturerHeaderCell() {
        return this.getGridHeaderCells().get((this.manufacturerColumnIndex-1));
    }

    private getManufacturerFilter() {
        return this.getManufacturerHeaderCell().element(by.className('ui-grid-filter-input'));
    }

    async searchViaManufacturerFilter(manufacturerName:ProductManufacturer) {
        await this.getManufacturerFilter().clear();
        await this.getManufacturerFilter().sendKeys(manufacturerName);
    }

    /**
     * 
     * @param rowNumber start at 1
     */
    async getQTYValue(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.qtyColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    /**
     * 
     * @param rowNumber start at 1
     */
    async getHCPCSValue(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.hcpcsColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    /**
     * 
     * @param rowNumber start at 1
     */
    async getPRValue(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.prColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    /**
     * 
     * @param rowNumber start at 1
     */
    async getManufacturerValue(rowNumber:number) {
        return await this.getGridBodyRowCell(rowNumber, this.manufacturerColumnIndex).element(by.className('ui-grid-cell-contents')).getText();
    }

    //Workflow methods
    async updateProduct(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Update Product\"]')).click();
    }

    async updateProductUsingHCPCSCode(hcpcsCode:string) {
        let firstRowIndex = 1;

        await this.searchViaHCPCSFilter(hcpcsCode);
        await this.updateProduct(firstRowIndex);
    }

    async deleteProduct(rowNumber:number) {
        await this.getGridBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Delete Product\"]')).click();
    }

    async deleteProductUsingHCPCSCode(hcpcsCode:string) {
        let firstRowIndex = 1;

        await this.searchViaHCPCSFilter(hcpcsCode);
        await this.deleteProduct(firstRowIndex);
        await this.getHCPCSFilter().clear();
    }

    async deleteProductUsingManufacturerName(manufacturerName:ProductManufacturer) {
        let firstRowIndex = 1;

        await this.searchViaManufacturerFilter(manufacturerName);
        await this.deleteProduct(firstRowIndex);
        await this.getManufacturerFilter().clear();
    }
}