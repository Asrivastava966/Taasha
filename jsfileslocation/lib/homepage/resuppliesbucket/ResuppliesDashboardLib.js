"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ResuppliesDashboardPO_1 = require("../../../po/homepage/resuppliesbucket/ResuppliesDashboardPO");
class ResuppliesDashboardLib {
    constructor() {
        this.resuppliesDashboardPO = new ResuppliesDashboardPO_1.ResuppliesDashboardPO();
    }
    getResuppliesDashboardPO() {
        return this.resuppliesDashboardPO;
    }
    navigateBackToHomepageDashboard() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getResuppliesDashboardPO().getDashboardButton().click();
        });
    }
    navigateToResuppliesDashboardBucket(resuppliesDashboardBucket) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.getResuppliesDashboardPO().getResuppliesDashboardBucketElement(resuppliesDashboardBucket).click();
        });
    }
}
exports.ResuppliesDashboardLib = ResuppliesDashboardLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzdXBwbGllc0Rhc2hib2FyZExpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL2hvbWVwYWdlL3Jlc3VwcGxpZXNidWNrZXQvUmVzdXBwbGllc0Rhc2hib2FyZExpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUdBQW9HO0FBR3BHLE1BQWEsc0JBQXNCO0lBRy9CO1FBQ0ksSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksNkNBQXFCLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQsd0JBQXdCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDO0lBQ3RDLENBQUM7SUFFSywrQkFBK0I7O1lBQ2pDLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2RSxDQUFDO0tBQUE7SUFFSyxtQ0FBbUMsQ0FBQyx5QkFBbUQ7O1lBQ3pGLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUMsbUNBQW1DLENBQUMseUJBQXlCLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqSCxDQUFDO0tBQUE7Q0FDSjtBQWxCRCx3REFrQkMifQ==