import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Event } from "../events.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { EventsService } from "../events.service";

@Injectable()
export class EventResolve implements Resolve<Event> {

    constructor(private eventsService: EventsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event> {
        var id = route.params['id'];
        return this.eventsService.getEvent(id); 
    }
}