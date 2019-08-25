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
class OrderNote {
    constructor(orderNoteType) {
        this.orderNoteType = orderNoteType;
    }
    ////////// Base Note Info //////////
    setBaseNoteInfo() {
        let noteInfo = new NoteInfo_1.NoteInfo();
        let createdDateAsToday = new Date();
        noteInfo.setOrderNoteType(this.orderNoteType);
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
            yield addPatientLib.getOrdersLib().getOrderNotesLib().addNewNote();
            yield addPatientLib.getOrdersLib().getOrderNotesLib().fillNoteInfo(noteInfo);
            yield addPatientLib.getOrdersLib().getOrderNotesLib().save();
            if (hasComment) {
                yield addPatientLib.getOrdersLib().getOrderNotesLib().addComment(noteInfo.getComment());
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
            yield addPatientLib.getOrdersLib().getOrderNotesLib().updateOpenNote(noteIndex);
            yield addPatientLib.getOrdersLib().getOrderNotesLib().fillNoteInfo(noteInfo);
            yield addPatientLib.getOrdersLib().getOrderNotesLib().save();
            if (hasComment) {
                yield addPatientLib.getOrdersLib().getOrderNotesLib().addComment(noteInfo.getComment());
            }
        });
    }
}
exports.OrderNote = OrderNote;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3JkZXJOb3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcmFfYXV0b21hdGlvbi9kYXRhL2Jhc2VkYXRhL09yZGVyTm90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0EsK0NBQTRDO0FBQzVDLHdEQUFxRDtBQUNyRCxvREFBaUQ7QUFDakQsZ0ZBQTZFO0FBRTdFLElBQUksZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDcEQsSUFBSSxrQkFBa0IsR0FBRyxnQkFBZ0IsQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFDO0FBRXpGLE1BQWEsU0FBUztJQUdsQixZQUFZLGFBQTJCO1FBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxvQ0FBb0M7SUFFNUIsZUFBZTtRQUNuQixJQUFJLFFBQVEsR0FBRyxJQUFJLG1CQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLGtCQUFrQixHQUFRLElBQUksSUFBSSxFQUFFLENBQUM7UUFFekMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM5QyxRQUFRLENBQUMsV0FBVyxDQUFDLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDcEUsUUFBUSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDNUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRWhFLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFSyxPQUFPLENBQUMsUUFBaUIsRUFBRSxVQUFrQjs7WUFDL0MsSUFBSSxhQUFhLEdBQWlCLElBQUksNkJBQWEsRUFBRSxDQUFDO1lBQ3RELE1BQU0sYUFBYSxDQUFDLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbkUsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0UsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU3RCxJQUFHLFVBQVUsRUFBRTtnQkFDWCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUMzRjtZQUVELE9BQU8sUUFBUSxDQUFDO1FBQ3BCLENBQUM7S0FBQTtJQUVLLFdBQVc7O1lBQ2IsSUFBSSxVQUFVLEdBQVcsSUFBSSxDQUFDO1lBQzlCLE9BQU8sTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRSxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsU0FBZ0IsRUFBRSxRQUFpQixFQUFFLFVBQWtCOztZQUNwRSxJQUFJLGFBQWEsR0FBaUIsSUFBSSw2QkFBYSxFQUFFLENBQUM7WUFDdEQsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEYsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0UsTUFBTSxhQUFhLENBQUMsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUU3RCxJQUFHLFVBQVUsRUFBRTtnQkFDWCxNQUFNLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUMzRjtRQUNMLENBQUM7S0FBQTtDQUNKO0FBcERELDhCQW9EQyJ9