import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { BooleanPipe } from './common/boolean.pipe';
import { FormsModule } from '@angular/forms';
import { EventsService } from './events/events.service';
import { HttpModule } from '@angular/http';
import { ModalComponent } from './modal/modal.component'
import { ModalOpenereDirective } from './modal/modal-opener.directive';
import { ComunicatorService } from './common/comunicator.service';
import { SpeakersComponent } from './speakers/speakers.component';
import { routing } from './app.routes';
import { EventCanActivate } from './events/events.canactivate.guard';
import { EventsCanDeactivateGuard } from './events/events.candeactivate.guard';
import { EventsResolve } from './events/events.resolver';
import { EventResolve } from './events/event-detail/event.resolver';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    EventsComponent,
    EventDetailComponent,
    BooleanPipe,
    ModalComponent,
    ModalOpenereDirective,
    SpeakersComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, routing
  ],
  providers: [
    ComunicatorService,
    EventCanActivate,
    EventsCanDeactivateGuard,
    EventsService, { provide: EventsService, useClass: EventsService },
    EventsResolve,
    EventResolve
  ], // singleton
  bootstrap: [AppComponent]
})
export class AppModule { }
