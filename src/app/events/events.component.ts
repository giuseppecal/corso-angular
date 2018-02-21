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
  public selectedEvent: Event;
  public formVisible: boolean;

  public saveResponse: string = '';
  // private service: EventsService; // il private nel costruttore mi ha fatto commentare questa riga

  constructor(private service: EventsService) {
    this.hideForm();
    // this.service = service; // il private nel costruttore mi ha fatto commentare questa riga
    this.loadEvents();
  }

  public loadEvents() {
    this.service.getEvents().subscribe( // subscribe all'evento del
      (data: Event[]) => this.eventList = data,
      err => console.log(err));
  }

  public createEvent() {
    this.selectedEvent = new Event();
    this.selectedEvent.startDate = '2018-01-12';
    this.selectedEvent.endDate = '2018-01-13';
    this.showForm();
  }

  public saveEvent() {
    if (this.selectedEvent.id) {

      this.updateEvent();
    } else {

      this.create();
    }
  }

  public deleteEvent(event: Event) {
    this.service.deleteEvent(event).subscribe(
      (data: number) => {
        this.saveOk();
        this.hideForm();
        this.loadEvents();
      },
      err => {
        this.saveKo(err);
        this.showForm();
      });
  }

  public create() {
    this.service.saveEvent(this.selectedEvent).subscribe(
      (data: number) => {
        this.saveOk();
        this.hideForm();
        this.loadEvents();
      },
      err => {
        this.saveKo(err);
        this.showForm();
      });
  }

  public saveOk() {
    this.saveResponse = 'Success! ';

  }

  public saveKo(err: any) {
    this.saveResponse = 'Error: ' + err;
  }

  public editEvent(event: Event) {
    this.selectedEvent = event;
    this.showForm();
  }

  public updateEvent() {
    this.service.updateEvent(this.selectedEvent).subscribe(
      (data: number) => {
        this.saveOk();
        this.formVisible = true
      },
      err => {
        this.saveKo(err);
        this.formVisible = true;
        this.loadEvents();
      });
  }

  public showForm() {
    this.formVisible = true;
  }

  public hideForm() {
    this.formVisible = false;
  }
}