import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Event } from '../events.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {

  @Output()
  public closeClicked = new EventEmitter();

  @Input()
  public currentEvent: Event;

  constructor() {}

  public close() {
    this.closeClicked.emit();
  }

}
