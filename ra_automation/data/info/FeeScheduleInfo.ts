import {FeeScheduleStatus} from "../enums/FeeScheduleStatus"
import {FeeSchedulesType} from "../enums/FeeSchedulesType"

export class FeeScheduleInfo{
    private description:string
    private type:FeeSchedulesType
    private status:FeeScheduleStatus
    private comments:string

    public getDescription():string{
        return this.description
    }

    public setDescription(value:string){
        this.description=value
    }

    public getType():FeeSchedulesType{
        return this.type
    }

    public setType(value:FeeSchedulesType){
        this.type=value
    }

    public getStatus(): FeeScheduleStatus {
        return this.status;
    }

    public setStatus(value:FeeScheduleStatus){
        this.status=value
    }
    
    public getComment():string{
        return this.comments
    }
    
    public setComment(value:string){
        this.comments=value
    }
}