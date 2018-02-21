import { Component, OnInit } from '@angular/core';
import { Event } from './events.model';
import { EventsService } from './events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  // providers: [EventsService]
})
export class EventsComponent {

  public eventList: Event[];
  public selectedEvent : Event;
  public formVisible : boolean;
  // private service: EventsService; // il private nel costruttore mi ha fatto commentare questa riga
  
  constructor(private service: EventsService) { 
    this.hideForm();
    // this.service = service; // il private nel costruttore mi ha fatto commentare questa riga
    this.loadEvents();    
}

  public loadEvents() {
    this.service.getEvents().subscribe(
      (data: Event[]) => this.eventList = data);   
  }

  public createEvent() {
    this.selectedEvent = new Event();
    this.showForm();
  }

  public editEvent(event: Event) {
    this.selectedEvent = event;
    this.showForm();
  }

  public deleteEvent(event: Event) {
    alert('delete: ' +JSON.stringify(event) );
  }

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }
}