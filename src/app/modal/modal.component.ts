import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html'
})
export class ModalComponent {

  @Input()
  public title : string;

  @Input()
  public modalId: string;

  constructor() {
    this.title = "BNL Title:)"
  }
}
