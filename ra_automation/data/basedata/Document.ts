import { DocumentInfo } from "../info/DocumentInfo";
import { DocumentType } from "../enums/DocumentType";
import { AddPatientLib } from "../../lib/normaladdpatientpage/AddPatientLib";
import { Tabs } from "../enums/Tabs";

let propertiesReader = require('properties-reader');
let documentInfoProperties = propertiesReader('ra_automation/data/properties/DocumentInfo.file');

export class Document {
    private tab:Tabs;
    private documentType:DocumentType;

    constructor(tab:Tabs, documentType:DocumentType) {
        this.tab = tab;
        this.documentType = documentType;
    }

    ////////// Test Document Info //////////
    setTestDocumentInfo() {
        let documentInfo:DocumentInfo = new DocumentInfo();
        let defaultOrderIndex = 1;

        documentInfo.setDocumentPath(documentInfoProperties.get('documents.documentinfo.path'));
        documentInfo.setDocumentType(this.documentType);
        documentInfo.setOrderIndex(defaultOrderIndex);
        documentInfo.setNotes(documentInfoProperties.get('documents.documentinfo.notes'));

        return documentInfo;
    }

    async uploadDocument(documentInfo:DocumentInfo) {
        let addPatientLib = new AddPatientLib();
        
        switch(this.tab) {
            case Tabs.PATIENT: {
                await addPatientLib.getDocumentsLib().fillDocumentInfo(documentInfo);
                await addPatientLib.getDocumentsLib().save();
                break;
            }

            case Tabs.ORDER: {
                await addPatientLib.getOrdersLib().getDocumentsLib().fillDocumentInfo(documentInfo);
                await addPatientLib.getOrdersLib().getDocumentsLib().save();
                break;
            }
        }
    }

    async uploadTestDocument() {
        await this.uploadDocument(this.setTestDocumentInfo());
    }
}