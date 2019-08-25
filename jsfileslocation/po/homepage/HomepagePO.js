"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const MyTasksGrid_1 = require("../../component/comp/MyTasksGrid");
const CustomDropdownMenu_1 = require("../../component/comp/CustomDropdownMenu");
const CustomDropdownMenuOrigin_1 = require("../../data/enums/CustomDropdownMenuOrigin");
class HomepagePO {
    getPageTitle() {
        return HomepagePO.pageTitle;
    }
    getLoggedInUserInfo() {
        return HomepagePO.userInfo;
    }
    getAlertDropdownButton() {
        return HomepagePO.alertDropdown;
    }
    getNavigationDropdownButton() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(HomepagePO.navigationDropdown, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getLogoutButton() {
        return HomepagePO.logoutButton;
    }
    getAddPatientDropdownButton() {
        return new CustomDropdownMenu_1.CustomDropdownMenu(HomepagePO.addPatientDropdownButton, CustomDropdownMenuOrigin_1.CustomDropdownMenuOrigin.BUTTON);
    }
    getSearchPatientButton() {
        return HomepagePO.searchPatientButton;
    }
    getHomepageDashboardBucketMaster() {
        return HomepagePO.dashboardBucketMaster;
    }
    getHomepageDashboardBuckets() {
        return this.getHomepageDashboardBucketMaster().all(protractor_1.by.tagName('li'));
    }
    getMyTasksGrid() {
        return new MyTasksGrid_1.MyTasksGrid(HomepagePO.myTasksGrid);
    }
}
//header
HomepagePO.pageTitle = protractor_1.element(protractor_1.by.className('logo'));
HomepagePO.userInfo = protractor_1.element(protractor_1.by.className('welcomeMsg'));
HomepagePO.alertDropdown = protractor_1.element(protractor_1.by.id('alertmenu'));
HomepagePO.navigationDropdown = protractor_1.element.all(protractor_1.by.className('custom-dropdown-toggle')).get(0);
HomepagePO.logoutButton = protractor_1.element(protractor_1.by.className('logout'));
//Dashboard
HomepagePO.addPatientDropdownButton = protractor_1.element.all(protractor_1.by.className('custom-dropdown-toggle')).get(1);
HomepagePO.searchPatientButton = protractor_1.element(protractor_1.by.css('[class*="person-view"]'));
HomepagePO.dashboardBucketMaster = protractor_1.element(protractor_1.by.className('masterActions'));
//My Tasks Grid
HomepagePO.myTasksGrid = protractor_1.element(protractor_1.by.id('grid1'));
exports.HomepagePO = HomepagePO;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZXBhZ2VQTy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vcG8vaG9tZXBhZ2UvSG9tZXBhZ2VQTy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF5QztBQUN6QyxrRUFBK0Q7QUFDL0QsZ0ZBQTZFO0FBQzdFLHdGQUFxRjtBQUVyRixNQUFhLFVBQVU7SUFTbkIsWUFBWTtRQUNSLE9BQU8sVUFBVSxDQUFDLFNBQVMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2YsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBc0I7UUFDbEIsT0FBTyxVQUFVLENBQUMsYUFBYSxDQUFDO0lBQ3BDLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLHVDQUFrQixDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxtREFBd0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRyxDQUFDO0lBRUQsZUFBZTtRQUNYLE9BQU8sVUFBVSxDQUFDLFlBQVksQ0FBQztJQUNuQyxDQUFDO0lBTUQsMkJBQTJCO1FBQ3ZCLE9BQU8sSUFBSSx1Q0FBa0IsQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsbURBQXdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDeEcsQ0FBQztJQUVELHNCQUFzQjtRQUNsQixPQUFPLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQztJQUMxQyxDQUFDO0lBSUQsZ0NBQWdDO1FBQzVCLE9BQU8sVUFBVSxDQUFDLHFCQUFxQixDQUFDO0lBQzVDLENBQUM7SUFFRCwyQkFBMkI7UUFDdkIsT0FBTyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFLRCxjQUFjO1FBQ1YsT0FBTyxJQUFJLHlCQUFXLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ25ELENBQUM7O0FBdERELFFBQVE7QUFDTyxvQkFBUyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzFDLG1CQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7QUFDL0Msd0JBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUM1Qyw2QkFBa0IsR0FBSSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDakYsdUJBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQXNCOUQsV0FBVztBQUNJLG1DQUF3QixHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0Riw4QkFBbUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO0FBVWhFLGdDQUFxQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBVTlFLGVBQWU7QUFDQSxzQkFBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBcER6RCxnQ0F5REMifQ==