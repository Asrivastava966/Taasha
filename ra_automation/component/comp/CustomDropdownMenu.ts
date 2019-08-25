import { ElementFinder, by } from "protractor";
import { CustomDropdownMenuOrigin } from "../../data/enums/CustomDropdownMenuOrigin";

export class CustomDropdownMenu {
    private customDropdownMenuToggle:ElementFinder; 
    private dropdownMenuOrigin:CustomDropdownMenuOrigin

    constructor(customDropdownMenu:ElementFinder, dropdownMenuOrigin:CustomDropdownMenuOrigin) {
        this.customDropdownMenuToggle = customDropdownMenu;
        this.dropdownMenuOrigin = dropdownMenuOrigin;
    }

    private getCustomDropdownMenuToggle() {
        return this.customDropdownMenuToggle;
    }

    private getCustomDropdownMenu() {
        return this.getCustomDropdownMenuToggle().all(by.xpath("following-sibling::ul")).first();
    }

    private getCustomDropdownMenuOptions() {
        return this.getCustomDropdownMenu().all(by.tagName('li'));
    }

    private async getCustomDropdownMenuOptionsCount() {
        return await this.getCustomDropdownMenuOptions().count();
    }

    /**
     * 
     * @param index starts at 1
     */
    private async getCustomDropdownMenuOptionLinkText(index:number) {
        return await this.getCustomDropdownMenuOptions().get(--index).element(by.tagName('a')).getText();
    }

    /**
     * 
     * @param index starts at 1
     */
    async selectDropdownMenuOptionByIndex(index:number) {
        await this.getCustomDropdownMenuOptions().get(--index).click();
    }

    async selectDropdownMenuOptionByLinkText(linkText:string) {
        if(this.dropdownMenuOrigin == CustomDropdownMenuOrigin.INPUT_FIELD) {
            await this.getCustomDropdownMenuToggle().sendKeys(linkText);
        }
        else{
            await this.getCustomDropdownMenuToggle().click();
        }

        let dropdownMenuOptionsCount = await this.getCustomDropdownMenuOptionsCount();

        for(let i=1; i<=dropdownMenuOptionsCount; i++) {
            let dropdownMenuOptionLinkText = await this.getCustomDropdownMenuOptionLinkText(i);
    
            if(dropdownMenuOptionLinkText.includes(linkText)) {
                await this.selectDropdownMenuOptionByIndex(i);
                break;
            }
        }
    }
}