import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Event } from "./events.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { EventsService } from "./events.service";


@Injectable()
export class EventsResolve implements Resolve<Event[]> {

    constructor(private eventsService: EventsService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Event[]> {
        return this.eventsService.getEvents();
    }
}