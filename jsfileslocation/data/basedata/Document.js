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
const DocumentInfo_1 = require("../info/DocumentInfo");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
const Tabs_1 = require("../enums/Tabs");
let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');
class Document {
    constructor(tab, documentType) {
        this.tab = tab;
        this.documentType = documentType;
    }
    ////////// Test Document Info //////////
    setTestDocumentInfo() {
        let documentInfo = new DocumentInfo_1.DocumentInfo();
        let defaultOrderIndex = 1;
        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        documentInfo.setDocumentType(this.documentType);
        documentInfo.setOrderIndex(defaultOrderIndex);
        documentInfo.setNotes(documentInfoProperties.get('documents.documentinfo.notes'));
        return documentInfo;
    }
    uploadDocument(documentInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            switch (this.tab) {
                case Tabs_1.Tabs.PATIENT: {
                    yield addPatientLib.getDocumentsLib().fillDocumentInfo(documentInfo);
                    yield addPatientLib.getDocumentsLib().save();
                    break;
                }
                case Tabs_1.Tabs.ORDER: {
                    yield addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
                    yield addPatientLib.getOrdersLib().getDocumentsLib().save();
                    break;
                }
            }
        });
    }
    uploadTestDocument() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.uploadDocument(this.setTestDocumentInfo());
        });
    }
}
exports.Document = Document;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9yYV9hdXRvbWF0aW9uL2RhdGEvYmFzZWRhdGEvRG9jdW1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVEQUFvRDtBQUVwRCxnRkFBNkU7QUFDN0Usd0NBQXFDO0FBRXJDLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxzQkFBc0IsR0FBRyxnQkFBZ0IsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0FBRWpHLE1BQWEsUUFBUTtJQUlqQixZQUFZLEdBQVEsRUFBRSxZQUF5QjtRQUMzQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO0lBQ3JDLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMsbUJBQW1CO1FBQ2YsSUFBSSxZQUFZLEdBQWdCLElBQUksMkJBQVksRUFBRSxDQUFDO1FBQ25ELElBQUksaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBRTFCLFlBQVksQ0FBQyxlQUFlLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN4RixZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNoRCxZQUFZLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDOUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1FBRWxGLE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFSyxjQUFjLENBQUMsWUFBeUI7O1lBQzFDLElBQUksYUFBYSxHQUFHLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBRXhDLFFBQU8sSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDYixLQUFLLFdBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDZixNQUFNLGFBQWEsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDckUsTUFBTSxhQUFhLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7b0JBQzdDLE1BQU07aUJBQ1Q7Z0JBRUQsS0FBSyxXQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2IsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQ3BGLE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO29CQUM1RCxNQUFNO2lCQUNUO2FBQ0o7UUFDTCxDQUFDO0tBQUE7SUFFSyxrQkFBa0I7O1lBQ3BCLE1BQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzFELENBQUM7S0FBQTtDQUNKO0FBM0NELDRCQTJDQyJ9