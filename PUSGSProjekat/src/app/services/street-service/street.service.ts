import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Device } from "src/app/models/device.model";

@Injectable({
    providedIn: 'root'
})

export class StreetService{
    private baseUrl = "https://localhost:44381/api/Streets/";

    constructor(private http:HttpClient) { }

    getStreets(){
        return this.http.get(this.baseUrl);
    }

    getPriorityForDevices(body:Device[]){
        return this.http.post(this.baseUrl + "GetPriorityForDevices", body);
    }
}
