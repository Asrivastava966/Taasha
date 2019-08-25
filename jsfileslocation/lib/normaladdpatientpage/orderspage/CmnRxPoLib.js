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
const CmnRxPoPO_1 = require("../../../po/normaladdpatientpage/orderspage/CmnRxPoPO");
class CmnRxPoLib {
    constructor() {
        this.cmnRxPoPO = new CmnRxPoPO_1.CmnRxPoPO();
    }
    generateABNForm(abnFormInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.cmnRxPoPO.getABNButton().click();
            yield this.cmnRxPoPO.getABNFormDialog().fillABNFormInfo(abnFormInfo);
            yield this.cmnRxPoPO.getABNFormDialog().save();
            yield this.cmnRxPoPO.getABNFormDialog().close();
        });
    }
}
exports.CmnRxPoLib = CmnRxPoLib;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ21uUnhQb0xpYi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JhX2F1dG9tYXRpb24vbGliL25vcm1hbGFkZHBhdGllbnRwYWdlL29yZGVyc3BhZ2UvQ21uUnhQb0xpYi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUZBQWtGO0FBR2xGLE1BQWEsVUFBVTtJQUduQjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVZLGVBQWUsQ0FBQyxXQUF1Qjs7WUFDaEQsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVDLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUNyRSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMvQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxDQUFDO0tBQUE7Q0FDSjtBQWJELGdDQWFDIn0=