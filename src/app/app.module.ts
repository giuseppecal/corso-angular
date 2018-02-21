import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { EventsComponent } from './events/events.component';
import { EventDetailComponent } from './events/event-detail/event-detail.component';
import { BooleanPipe } from './common/boolean.pipe';
import { FormsModule } from '@angular/forms';
import { EventsService } from './events/events.service';
import { HttpModule } from '@angular/http'

@NgModule({
  declarations: [
    AppComponent, MenuComponent, EventsComponent, EventDetailComponent, BooleanPipe 
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule
  ],
  providers: [ EventsService, { provide: EventsService, useClass: EventsService} ], // singleton
  bootstrap: [AppComponent]
})
export class AppModule { }