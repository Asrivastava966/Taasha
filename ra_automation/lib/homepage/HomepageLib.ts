import { browser, by } from "protractor";
import { HomepagePO } from "../../po/homepage/HomepagePO";
import { AddPatientMode } from "../../data/enums/AddPatientMode";
import { HomepageDashboardBucket } from "../../data/enums/HomepageDashboardBucket";

export class HomepageLib{
    homepagePO: HomepagePO;

    constructor(){
        this.homepagePO = new HomepagePO();
    }

    getHomepagePO(){
        return this.homepagePO;
    }

    //header
    async navigateToHomepage() {
        await this.getHomepagePO().getPageTitle().click();
    }

    async getLoggedInUserInfo(){
        return await this.getHomepagePO().getLoggedInUserInfo().getText();
    }

    async navigateToAdminDashboardPage() {
        let adminDashboardLinkText = 'Admin Dashboard';
        await this.getHomepagePO().getNavigationDropdownButton().selectDropdownMenuOptionByLinkText(adminDashboardLinkText);
    }

    async navigateToReportsPage() {
        let adminDashboardLinkText = 'Reports';
        await this.getHomepagePO().getNavigationDropdownButton().selectDropdownMenuOptionByLinkText(adminDashboardLinkText);
    }

    async logout(){
        await this.getHomepagePO().getLogoutButton().click();
    }

    async addPatientViaQuickAddLink() {
        let quickAddLinkText = 'Quick Add';
        await this.getHomepagePO().getAddPatientDropdownButton().selectDropdownMenuOptionByLinkText(quickAddLinkText);
    }

    async addPatientViaNormalAddLink() {
        let normalAddLinkText = 'Normal Add';
        await this.getHomepagePO().getAddPatientDropdownButton().selectDropdownMenuOptionByLinkText(normalAddLinkText);
    }

    //dashboard 
    async selectAddPatientMode(mode:AddPatientMode){
        browser.logger.info("Clicking on the \' " + mode + " \' link from the Add Patient dropdown.");

        switch(mode) {
            case AddPatientMode.QUICK_ADD: {
                await this.addPatientViaQuickAddLink();
                break;
            }
            case AddPatientMode.NORMAL_ADD: {
                await this.addPatientViaNormalAddLink();
                break;
            }
        }
    }

    async findPatient(){
        browser.logger.info("Navigating to the 'Find Patient' form...");
        await this.getHomepagePO().getSearchPatientButton().click();
    }

    /**
     * 
     * @param bucketIndex starts at 1.
     */
    getHomepageDashboardBucket(bucketIndex:number) {
        return this.getHomepagePO().getHomepageDashboardBuckets().get(--bucketIndex);
    }

    async getHomepageDashboardBucketCount() {
        return await this.getHomepagePO().getHomepageDashboardBuckets().count();
    }

    /**
     * 
     * @param bucketIndex starts at 1.
     */
    async getHomepageDashboardBucketName(bucketIndex:number) {
        return await this.getHomepagePO().getHomepageDashboardBuckets().get(--bucketIndex).element(by.tagName('h1')).getText();
    }

    async getHomepageDashboardBucketDataCount(homepageDashboardBucket:HomepageDashboardBucket) {
        let totalBucketCount = await this.getHomepageDashboardBucketCount();
        
        for(let i=1; i<=totalBucketCount; i++) {
            let bucketName:string = await this.getHomepageDashboardBucketName(i);
            if(bucketName == homepageDashboardBucket) {
                return await this.getHomepageDashboardBucket(i).element(by.tagName('div'));
            }
        }
    }

    async navigateToHomepageDashboardBucket(homepageDashboardBucket:HomepageDashboardBucket) {
        let totalBucketCount = await this.getHomepageDashboardBucketCount();

        for(let i=1; i<=totalBucketCount; i++) {
            let bucketName:string = await this.getHomepageDashboardBucketName(i);

            if(bucketName == homepageDashboardBucket) {
                await this.getHomepageDashboardBucket(i).click();
                break;
            }
        }
    }

    //'My Tasks' grid on Homepage
    getMyTasksGrid(){
        return this.getHomepagePO().getMyTasksGrid();
    }
}