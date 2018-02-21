import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { Event } from '../events.model';
import { ComunicatorService } from '../../common/comunicator.service';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html'
})
export class EventDetailComponent {

  constructor(private comunicator: ComunicatorService) {
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
