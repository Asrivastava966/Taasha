import { OrderNoteType } from "../enums/OrderNoteType";
import { NoteInfo } from "../info/NoteInfo";
import { NoteSeverity } from "../enums/NoteSeverity";
import { NoteStatus } from "../enums/NoteStatus";
import { AddPatientLib } from '../../lib/normaladdpatientpage/AddPatientLib';

let propertiesReader = require('properties-reader');
let noteInfoProperties = propertiesReader('ra_automation/data/properties/noteInfo.file');

export class OrderNote {
    orderNoteType:OrderNoteType;

    constructor(orderNoteType:OrderNoteType) {
        this.orderNoteType = orderNoteType;
    }

    ////////// Base Note Info //////////
    
    private setBaseNoteInfo() {
        let noteInfo = new NoteInfo();
        let createdDateAsToday:Date = new Date();
        
        noteInfo.setOrderNoteType(this.orderNoteType);
        noteInfo.setSeverity(NoteSeverity.HIGH); 
        noteInfo.setDateCreated(createdDateAsToday); 
        noteInfo.setNoteStatus(NoteStatus.OPEN); 
        noteInfo.setNoteSubject(noteInfoProperties.get('noteinfo.subject'));
        noteInfo.setNoteDescription(noteInfoProperties.get('noteinfo.description'));
        noteInfo.setComment(noteInfoProperties.get('noteinfo.comment'));

        return noteInfo;
    }

    async addNote(noteInfo:NoteInfo, hasComment:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getOrdersLib().getOrderNotesLib().addNewNote();
        await addPatientLib.getOrdersLib().getOrderNotesLib().fillNoteInfo(noteInfo);
        await addPatientLib.getOrdersLib().getOrderNotesLib().save();

        if(hasComment) {
            await addPatientLib.getOrdersLib().getOrderNotesLib().addComment(noteInfo.getComment());
        }

        return noteInfo;
    }

    async addBaseNote() {
        let hasComment:boolean = true;
        return await this.addNote(this.setBaseNoteInfo(), hasComment);
    }

    async updateNote(noteIndex:number, noteInfo:NoteInfo, hasComment:boolean) {
        let addPatientLib:AddPatientLib = new AddPatientLib();
        await addPatientLib.getOrdersLib().getOrderNotesLib().updateOpenNote(noteIndex);
        await addPatientLib.getOrdersLib().getOrderNotesLib().fillNoteInfo(noteInfo);
        await addPatientLib.getOrdersLib().getOrderNotesLib().save();

        if(hasComment) {
            await addPatientLib.getOrdersLib().getOrderNotesLib().addComment(noteInfo.getComment());
        }
    }
}