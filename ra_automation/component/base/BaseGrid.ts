import { ElementFinder, by } from "protractor";

export class BaseGrid {
    private gridElement:ElementFinder;

    constructor(gridElement:ElementFinder) {
        this.gridElement = gridElement;
    }

    protected getGrid() {
        return this.gridElement;
    }

    protected getGridContentsWrapper() {
        return this.getGrid().element(by.className('ui-grid-contents-wrapper'));
    }

    protected getGridContainer() {
        return this.getGridContentsWrapper().element(by.css('[role=\"grid\"]'));
    }

    //grid-header
    protected getGridHeader() {
        return this.getGridContainer().element(by.className('ui-grid-header'));
    }

    protected getGridHeaderCellRow() {
        return this.getGridHeader().element(by.className('ui-grid-header-cell-row'));
    }

    protected getGridHeaderCells() {
        return this.getGridHeaderCellRow().all(by.className('ui-grid-header-cell'));
    }

    protected async getGridHeaderCellCount() {
        return await this.getGridHeaderCells().count(); 
    }

    protected getGridHeaderCell(columnNumber:number) {
        return this.getGridHeaderCells().get(--columnNumber);
    }

    //grid-body
    protected getGridBody() {
        return this.getGridContainer().element(by.className('ui-grid-viewport'));
    }

    protected getGridBodyRows() {
        return this.getGridBody().all(by.className('ui-grid-row'));
    }

    protected async getGridBodyRowCount() {
        return await this.getGridBodyRows().count();
    }

    /**
     * 
     * @param rowNumber starts at 1
     */
    protected getGridBodyRow(rowNumber:number) {
        return this.getGridBodyRows().get(--rowNumber);
    }

    /**
     * 
     * @param rowNumber starts at 1
     */
    protected getGridBodyRowCells(rowNumber:number) {
        return this.getGridBodyRow(rowNumber).all(by.className('ui-grid-cell'));
    }

    /**
     * 
     * @param rowNumber starts at 1
     * @param columnNumber starts at 1
     */
    protected getGridBodyRowCell(rowNumber:number, columnNumber:number) {
        return this.getGridBodyRowCells(rowNumber).get(--columnNumber);
    }

    //grid-footer
    getGridFooter() {
        return this.getGridContentsWrapper().element(by.className('ui-grid-footer-info'));
    }
    
    private getTotalItemsCountElement(){
        return this.getGridFooter().element(by.tagName('span')); 
    }
    
    async getTotalItemsCount(){
        let totalItemsCount:string;
        let totalItemsCountString:string;
        
        totalItemsCountString = await this.getTotalItemsCountElement().getText();
        totalItemsCount = totalItemsCountString.split(": ")[1];

        return +totalItemsCount;
    }
}