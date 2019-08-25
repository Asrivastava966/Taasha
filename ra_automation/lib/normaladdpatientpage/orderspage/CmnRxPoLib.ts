import { CmnRxPoPO } from "../../../po/normaladdpatientpage/orderspage/CmnRxPoPO";
import { ABNFormInfo } from "../../../data/info/ABNFormInfo";

export class CmnRxPoLib {
    cmnRxPoPO:CmnRxPoPO;

    constructor() {
        this.cmnRxPoPO = new CmnRxPoPO();
    }

    public async generateABNForm(abnFormInfo:ABNFormInfo) {
        await this.cmnRxPoPO.getABNButton().click();
        await this.cmnRxPoPO.getABNFormDialog().fillABNFormInfo(abnFormInfo);
        await this.cmnRxPoPO.getABNFormDialog().save();
        await this.cmnRxPoPO.getABNFormDialog().close();
    }
}