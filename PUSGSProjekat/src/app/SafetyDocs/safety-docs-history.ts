export class SafetyDocsHistory {
    public id:string;
    public date:string;
    public user:string;
    public status:string;

    constructor(id="",date="",user="",status=""){
        this.id = id;
        this.date = date;
        this.user = user;
        this.status = status;
    }
}
