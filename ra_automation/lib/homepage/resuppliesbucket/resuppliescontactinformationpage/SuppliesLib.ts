import { SuppliesPO } from "../../../../po/homepage/resuppliesbucket/resuppliescontactinformationpage/SuppliesPO";
import { ProductInfo } from "../../../../data/info/ProductInfo";
import { by } from "protractor";

export class SuppliesLib {
    private suppliesPO:SuppliesPO; 
    private hcpcsColumnIndex = 2;
    private actionColumnIndex = 8;

    constructor() {
        this.suppliesPO = new SuppliesPO();
    }

    getSuppliesPO() {
        return this.suppliesPO;
    }

    async getRowNumberOfHcpcsCode(hcpcsCode:string) {
        let totalRows = await this.getSuppliesPO().getProductsTable().getTableBodyRowCount();

        for(let i=1; i<=totalRows; i++) {
            let hcpcs = await this.getSuppliesPO().getProductsTable().getTableBodyRowCell(i, this.hcpcsColumnIndex).element(by.tagName('span')).getText();
            if(hcpcs == hcpcsCode) {
                return i;
            }
        }
    }

    async addProduct(productInfo:ProductInfo) {
        await this.getSuppliesPO().getAddNewProductButton().click();
        await this.getSuppliesPO().getProductModalDialog().addUpdateProduct(productInfo);
    }

    async updateProduct(hcpcsCode:string, productInfo:ProductInfo) {
        let rowNumber = await this.getRowNumberOfHcpcsCode(hcpcsCode);
        await this.getSuppliesPO().getProductsTable().getTableBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Update Product\"]')).click();
        await this.getSuppliesPO().getProductModalDialog().addUpdateProduct(productInfo);
    }

    async deleteProduct(hcpcsCode:string) {
        let rowNumber = await this.getRowNumberOfHcpcsCode(hcpcsCode);
        await this.getSuppliesPO().getProductsTable().getTableBodyRowCell(rowNumber, this.actionColumnIndex).element(by.css('[title=\"Delete Product\"]')).click();
        await this.getSuppliesPO().getConfirmationModalDialog().confirmYes();
    }

    async next() {
        await this.getSuppliesPO().getNextButton().click();
    }

    async previous() {
        await this.getSuppliesPO().getPreviousButton().click();
    }
}