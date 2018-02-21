import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Event } from '../events.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {

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

  constructor() {}

  public close() {
    this.closeClicked.emit();
  }

  public save() {
    this.saveClicked.emit();
  }

  public delete() {
    this.deleteClicked.emit();
  }
}
