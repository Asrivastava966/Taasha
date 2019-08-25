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
const NoteInfo_1 = require("../info/NoteInfo");
const NoteSeverity_1 = require("../enums/NoteSeverity");
const NoteStatus_1 = require("../enums/NoteStatus");
const AddPatientLib_1 = require("../../lib/normaladdpatientpage/AddPatientLib");
let propertiesReader = require('properties-reader');
let noteInfoProperties = propertiesReader('ra_automation/data/properties/noteInfo.file');
class Note {
    constructor(noteType) {
        this.noteType = noteType;
    }
    ////////// Base Note Info //////////
    setBaseNoteInfo() {
        let noteInfo = new NoteInfo_1.NoteInfo();
        let createdDateAsToday = new Date();
        noteInfo.setNoteType(this.noteType);
        noteInfo.setSeverity(NoteSeverity_1.NoteSeverity.HIGH);
        noteInfo.setDateCreated(createdDateAsToday);
        noteInfo.setNoteStatus(NoteStatus_1.NoteStatus.OPEN);
        noteInfo.setNoteSubject(noteInfoProperties.get('noteinfo.subject'));
        noteInfo.setNoteDescription(noteInfoProperties.get('noteinfo.description'));
        noteInfo.setComment(noteInfoProperties.get('noteinfo.comment'));
        return noteInfo;
    }
    addNote(noteInfo, hasComment) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getNotesLib().addNewNote();
            yield addPatientLib.getNotesLib().fillNoteInfo(noteInfo);
            yield addPatientLib.getNotesLib().save();
            if (hasComment) {
                yield addPatientLib.getNotesLib().addComment(noteInfo.getComment());
            }
            return noteInfo;
        });
    }
    addBaseNote() {
        return __awaiter(this, void 0, void 0, function* () {
            let hasComment = true;
            return yield this.addNote(this.setBaseNoteInfo(), hasComment);
        });
    }
    updateNote(noteIndex, noteInfo, hasComment) {
        return __awaiter(this, void 0, void 0, function* () {
            let addPatientLib = new AddPatientLib_1.AddPatientLib();
            yield addPatientLib.getNotesLib().updateOpenNote(noteIndex);
            yield addPatientLib.getNotesLib().fillNoteInfo(noteInfo);
            yield addPatientLib.getNotesLib().save();
            if (hasComment) {
                yield addPatientLib.getNotesLib().addComment(noteInfo.getComment());
            }
        });
    }
}
exports.Note = Note;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTm90ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhX2F1dG9tYXRpb24vZGF0YS9iYXNlZGF0YS9Ob3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSwrQ0FBNEM7QUFDNUMsd0RBQXFEO0FBQ3JELG9EQUFpRDtBQUNqRCxnRkFBNkU7QUFFN0UsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNwRCxJQUFJLGtCQUFrQixHQUFHLGdCQUFnQixDQUFDLDZDQUE2QyxDQUFDLENBQUM7QUFFekYsTUFBYSxJQUFJO0lBR2IsWUFBWSxRQUFpQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQW9DO0lBRTVCLGVBQWU7UUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7UUFDOUIsSUFBSSxrQkFBa0IsR0FBUSxJQUFJLElBQUksRUFBRSxDQUFDO1FBRXpDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxXQUFXLENBQUMsMkJBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNwRSxRQUFRLENBQUMsa0JBQWtCLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUM1RSxRQUFRLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFFaEUsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVLLE9BQU8sQ0FBQyxRQUFpQixFQUFFLFVBQWtCOztZQUMvQyxJQUFJLGFBQWEsR0FBaUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDdEQsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDL0MsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pELE1BQU0sYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXpDLElBQUcsVUFBVSxFQUFFO2dCQUNYLE1BQU0sYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUN2RTtZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDO1lBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsU0FBZ0IsRUFBRSxRQUFpQixFQUFFLFVBQWtCOztZQUNwRSxJQUFJLGFBQWEsR0FBaUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDdEQsTUFBTSxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6RCxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUV6QyxJQUFHLFVBQVUsRUFBRTtnQkFDWCxNQUFNLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7YUFDdkU7UUFDTCxDQUFDO0tBQUE7Q0FDSjtBQXBERCxvQkFvREMifQ==