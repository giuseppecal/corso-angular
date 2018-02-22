import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map'
import { Event } from "./events.model";
import { Observable } from "rxjs/Observable";

@Injectable() // solo se abbiamo delle dipendeze sulle nostre dipendeze, service in questo caso ha una dipendenza con http
export class EventsService {

    private apiUrl: string;

    constructor(private http: Http) {
        this.apiUrl = 'http://eventmanagerapiaspnetcore.azurewebsites.net/api/events';
    }

    public getEvents() : Observable<Event[]> {
        return this.http.get(this.apiUrl)
        .map((res: Response) => res.json() as Event[]);
    }

    public getEvent(id: number) : Observable<Event> {
        return this.http.get(this.apiUrl + '/' + id)
        .map((res: Response) => res.json() as Event);
    }

    public saveEvent(event: Event) : Observable<number> {
        return this.http.post(this.apiUrl, event)
        .map((res: Response) => res.status);
    }

    public updateEvent(event: Event) : Observable<number> {
        return this.http.put(this.apiUrl + '/' + event.id, event)
        .map((res: Response) => res.status);
    }

    public deleteEvent(event: Event) : Observable<number> {
        var deleteUrl = this.apiUrl + '/' + event.id; 
        return this.http.delete(deleteUrl)
        .map((res: Response) => res.status);
    }
}