import { ElementFinder, by } from "protractor";
import { BaseGrid } from "../base/BaseGrid";
import { Status } from "../../data/enums/Status";
import { SelectDropdown } from "./SelectDropdown";

export class InsuranceProviderManagementGrid extends BaseGrid {
    private statusColumnIndex = 1; 
    private providerNameColumnIndex = 2;
    private legacyIdColumnIndex = 3;
    private feeScheduleColumnIndex = 4;
    private providerNumberColumnIndex = 5;
    private groupColumnIndex = 6;
    private actionColumnIndex = 7; 

    constructor(gridElement:ElementFinder) {
        super(gridElement);
    }

    getGridContainer() {
        return this.getGridContentsWrapper().all(by.css('[role=\"grid\"]')).get(1);
    }

    getStatusDropdown() {
        return new SelectDropdown(this.getGridHeaderCell(this.statusColumnIndex).element(by.tagName('select'))); 
    }

    async selectStatus(status:Status) {
        await this.getStatusDropdown().selectOption(status);
    }

    async searchViaProviderNameFilter(providerName:string) {
        await this.getGridHeaderCell(this.providerNameColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(providerName);
    }

    async searchViaLegacyIdFilter(legacyId:string) {
        await this.getGridHeaderCell(this.legacyIdColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(legacyId);
    }

    async searchViaFeeScheduleFilter(feeSchedule:string) {
        await this.getGridHeaderCell(this.feeScheduleColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(feeSchedule);
    }

    async searchViaProviderNumberFilter(providerNumber:string) {
        await this.getGridHeaderCell(this.providerNumberColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(providerNumber);
    }

    async searchViaGroupFilter(group:string) {
        await this.getGridHeaderCell(this.groupColumnIndex).element(by.className('ui-grid-filter-input')).sendKeys(group);
    }

    private getActionCell(rowNumber:number) {
        return this.getGridBodyRowCell(rowNumber, this.actionColumnIndex);
    }

    public async updateInsuranceProvider(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.css('[title=\"Update Provider\"]')).click();
    }

    public async deleteInsuranceProvider(rowNumber:number) {
        await this.getActionCell(rowNumber).element(by.css('[title=\"Delete Provider\"]')).click();
    }
}