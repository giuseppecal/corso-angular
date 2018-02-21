import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicatorService } from '../common/comunicator.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnDestroy {

  public message: string;
  private subscription: Subscription;

  constructor(private comunicator: ComunicatorService) {
    this.subscription = this.comunicator.receiveMessage()
      .subscribe(message => this.message = message);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
