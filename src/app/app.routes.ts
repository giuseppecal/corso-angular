import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EventsComponent } from "./events/events.component";
import { SpeakersComponent } from "./speakers/speakers.component";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";

const appRoutes: Routes = [
    {
        path: 'events',
        component: EventsComponent
    },
    {
        path: 'event',
        component: EventDetailComponent
    },
    {
        path: 'event/:id',
        component: EventDetailComponent
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