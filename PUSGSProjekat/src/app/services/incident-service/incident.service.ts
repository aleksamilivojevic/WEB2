import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Device } from "src/app/models/device.model";
import { Incident } from "src/app/models/incident..model";

@Injectable({
    providedIn: 'root'
})
export class IncidentService{
    private baseUrl = "https://localhost:44381/api/Incidents"
    public currentIncident!:Incident;
    public currentCrew!:number;
    public currentDevices: Device[] = [];

    constructor(private http: HttpClient){
        this.currentIncident = new Incident();
        this.currentIncident.status = "Dispatched";
        this.currentCrew = -1;
    }

    getIncident() {
        return this.http.get(this.baseUrl);
    }

    addIncident(){
        var incident: Incident = this.currentIncident;
        var crew: number = this.currentCrew;
        var devices: Device[] = this.currentDevices;
        var body = {incident, crew, devices};

        return this.http.post(this.baseUrl, body);
    }
}
