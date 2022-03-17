import { Device } from "../models/device.model"
import {SafetyDocsChecklist} from "./safety-docs-checklist"
import {SafetyDocsBasicInfo} from "./safety-docs-basic-info"
import {SafetyDocsHistory} from "./safety-docs-history"
import {SafetyDocsMultimedia} from "./safety-docs-multimedia"

export class SafetyDocs {
    
    id!: string;
    basicInfo!: SafetyDocsBasicInfo;
    equipment!:Device;
    multimedia!: Array<SafetyDocsMultimedia>;
    historyState!: Array<SafetyDocsHistory>;
    checklist!: SafetyDocsChecklist;

    constructor(id="", basisInfo = null, device=null, checklist=null) {
        
        this.id= id;
        this.basicInfo!=basisInfo;
        this.equipment!=device;
        this.checklist!=checklist;
        this.multimedia=[];
        this.historyState=[];
        
    }
}

