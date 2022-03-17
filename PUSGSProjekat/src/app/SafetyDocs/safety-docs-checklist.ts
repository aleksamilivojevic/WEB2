export class SafetyDocsChecklist {
    public workOperations: boolean;
    public tags: boolean;
    public grounding:boolean;
    public ready: boolean;

    constructor (workOperations=false, tags=false, grounding=false, ready=false){
        this.workOperations=workOperations;
        this.tags=tags;
        this.grounding=grounding;
        this.ready=ready;
    }
}

