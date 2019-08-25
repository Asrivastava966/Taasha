import {TypeManagementPO} from "../../../po/admindashboardpage/typesbucket/TypeManagementPO"
import { async } from "q";
import { element,by } from "protractor";

export class TypeManagementLib{
    typeManagement:TypeManagementPO

    constructor(){
        this.typeManagement=new TypeManagementPO()
    }

   async SelectType(option:string){
      await this.typeManagement.getSelectTypeDropdown().selectOption(option)
    }

   async clickGoButton(){
       await this.typeManagement.getGoButton().click()
    }

   async clickAdminDashboard(){
       await this.typeManagement.getAdminDashboardButton().click()
    }

   async clickAddNewTypeButton(){
       await this.typeManagement.getAddNewtypeButton().click()
    }

    async clickOnEditButton(description){
        element.all(by.repeater("result in results")).each(function (item){
        item.element(by.css("td[data-title-text='Description']")).getText().then(function(text){
            if(text==description)
            {
                item.element(by.css("a[ng-click='getTypeForEditing(result.typeRefId)']")).click()
            }
        })
        })
    }

    
    
    

}