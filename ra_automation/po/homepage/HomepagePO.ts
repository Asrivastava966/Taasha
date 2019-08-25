import { element, by } from "protractor";
import { MyTasksGrid } from "../../component/comp/MyTasksGrid";
import { CustomDropdownMenu } from "../../component/comp/CustomDropdownMenu";
import { CustomDropdownMenuOrigin } from "../../data/enums/CustomDropdownMenuOrigin";

export class HomepagePO{
    
    //header
    private static pageTitle = element(by.className('logo'));
    private static userInfo = element(by.className('welcomeMsg'));
    private static alertDropdown = element(by.id('alertmenu'));
    private static navigationDropdown  = element.all(by.className('custom-dropdown-toggle')).get(0);
    private static logoutButton = element(by.className('logout'));

    getPageTitle(){
        return HomepagePO.pageTitle;
    }

    getLoggedInUserInfo(){
        return HomepagePO.userInfo;
    }

    getAlertDropdownButton(){
        return HomepagePO.alertDropdown;
    }

    getNavigationDropdownButton(){
        return new CustomDropdownMenu(HomepagePO.navigationDropdown, CustomDropdownMenuOrigin.BUTTON);
    }

    getLogoutButton(){
        return HomepagePO.logoutButton;
    }

    //Dashboard
    private static addPatientDropdownButton = element.all(by.className('custom-dropdown-toggle')).get(1);
    private static searchPatientButton = element(by.css('[class*="person-view"]')); 

    getAddPatientDropdownButton(){
        return new CustomDropdownMenu(HomepagePO.addPatientDropdownButton, CustomDropdownMenuOrigin.BUTTON);
    }

    getSearchPatientButton(){
        return HomepagePO.searchPatientButton;
    }

    private static dashboardBucketMaster = element(by.className('masterActions'));

    getHomepageDashboardBucketMaster() {
        return HomepagePO.dashboardBucketMaster;
    }

    getHomepageDashboardBuckets() {
        return this.getHomepageDashboardBucketMaster().all(by.tagName('li'));
    }

    //My Tasks Grid
    private static myTasksGrid = element(by.id('grid1'));

    getMyTasksGrid(){
        return new MyTasksGrid(HomepagePO.myTasksGrid);
    }
}