import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Event } from '../events.model';
import { ComunicatorService } from '../../common/comunicator.service';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {

  constructor(
      private comunicator: ComunicatorService,
      private activatedRoute: ActivatedRoute,
      private eventService: EventsService) {
      
      const id = this.activatedRoute.snapshot.params['id'];
      if ( id ) {
        this.loadEvent(id);
      }
  }

  @Output()
  public closeClicked = new EventEmitter();

  @Output()
  public saveClicked = new EventEmitter();

  @Output()
  public deleteClicked = new EventEmitter();

  @Input()
  public saveResponse: string;

  @Input()
  public currentEvent: Event;

  public loadEvent(id: number) {
    this.eventService.getEvent(id).subscribe( // subscribe all'evento del
      (data: Event) => {
        this.currentEvent = data
      },
      err => console.log(err));
  }

  public close() {
    this.comunicator.sendMessage('Il Chiudi ha comunicato con il menu');
    this.closeClicked.emit();
  }

  public save() {
    this.saveClicked.emit();
  }

  public delete() {
    this.deleteClicked.emit();
  }
}