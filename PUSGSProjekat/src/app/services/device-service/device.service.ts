import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Device } from "src/app/models/device.model";

@Injectable({
    providedIn: 'root'
})

export class DeviceService{
    private baseUrl = "https://localhost:44381/api/Devices/";

    constructor(private http:HttpClient){}

    getNextId(type:string)
    {
        return this.http.get(this.baseUrl + type);
    }

    addDevice(body:Device)
    {
        return this.http.post(this.baseUrl, body);
    }

    getDevices(){
        return this.http.get(this.baseUrl);
    }

    getDeviceByName(name:string){
        return this.http.get(this.baseUrl + "GetDeviceByName/" + name);
    }
}
