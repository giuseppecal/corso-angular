import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { EventCanActivate } from "./events/events.canactivate.guard";
import { EventsCanDeactivateGuard } from "./events/events.candeactivate.guard";
import { EventsResolve } from "./events/events.resolver";
import { EventResolve } from "./events/event-detail/event.resolver";

const appRoutes: Routes = 
    [{
        path: 'events',
        component: EventsComponent,
        resolve: { events: EventsResolve } // la key del dizionario del routing 
        // canActivate: [EventCanActivate],
        // canDeactivate: [EventsCanDeactivateGuard]
    },
    {
        path: 'event',
        component: EventDetailComponent
    },
    {
        path: 'event/:id',
        component: EventDetailComponent,
        resolve: { event: EventResolve } 
    },
    {
        path: 'speakers',
        component: SpeakersComponent
    },
    {
        path: '',
        redirectTo: 'events',
        pathMatch: 'full'
    }];

export const routing: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);