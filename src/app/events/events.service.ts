import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { Event } from "./events.model";

@Injectable() // solo se abbiamo delle dipendeze sulle nostre dipendeze, service in questo caso ha una dipendenza con http
export class EventsService {

    private apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';
    }

    public getEvents() {
        return this.http.get(this.apiUrl)
        .map((res: Response) => res.json() as Event[]);
    }
}