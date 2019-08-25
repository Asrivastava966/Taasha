import { ElementFinder, by } from "protractor";

export class BaseTable  {
    private tableElement:ElementFinder;

    constructor(tblElement:ElementFinder){
        this.tableElement = tblElement;
    }

    getTable() {
        return this.tableElement;
    }

    getTableHeader() {
        return this.getTable().element(by.tagName('thead'));
    }

    getTableBody() {
        return this.getTable().element(by.tagName('tbody'));
    }

    getTableHeaderColumns() {
        return this.getTableHeader().all(by.tagName('tr')).get(0).all(by.tagName('th'));
    }

    async getTableHeaderColumnCount() {
        return await this.getTableHeaderColumns().count();
    }

    /**
     * 
     * @param columnNumber index starts with 1
     */
    async getTableHeaderColumnTitle(columnNumber:number) {
        return await this.getTableHeaderColumns().get(--columnNumber).element(by.tagName('div')).getText();
    }

    getTableBodyRows() {
        return this.getTableBody().all(by.tagName('tr'));
    }

    async getTableBodyRowCount(){
        return await this.getTableBodyRows().count();
    }

    /**
     * 
     * @param rowNumber index starts with 1
     */
    getTableBodyRowCells(rowNumber:number) {
        return this.getTableBodyRows().get(--rowNumber).all(by.tagName('td'));
    }

    /**
     * 
     * @param rowNumber index starts with 1
     * @param columnNumber index starts with 1
     * 
     */
    getTableBodyRowCell(rowNumber:number, columnNumber:number) {
        return this.getTableBodyRowCells(rowNumber).get(--columnNumber);
    }
}