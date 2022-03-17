export class SafetyDocsBasicInfo {

    type:string;
    workPlan: string;
    crew:string;
    status:string;
    currentDate:string;
    user:string;
    phone:string;
    notes:string;
    details:string;

    constructor(tip="",planRada="",crew="",status="", currentDate="",user="",phone="",details="",notes=""){
    
        this.type = tip;
        this.workPlan = planRada;
        this.crew = crew;
        this.status = status;
        this.currentDate = currentDate;
        this.user = user;
        this.phone = phone;
        this.notes = notes;
        this.details=details;
    }
}
