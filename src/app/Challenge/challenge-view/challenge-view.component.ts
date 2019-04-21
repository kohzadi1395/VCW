import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Challenge} from '../../shared/Track.model';

@Component({
  selector: 'app-challenge-view',
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.css']
})
export class ChallengeViewComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() challenge: Challenge;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() cancelLabel: string;
  @Input() positiveLabel: string;

  @Output() closed: EventEmitter<ModalResult> = new EventEmitter<ModalResult>();
  @Output() loaded: EventEmitter<any> = new EventEmitter<any>();
  @Output() positiveLabelAction = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.loaded.next(this);
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
    this.closed.next({
      action: ModalAction.POSITIVE
    });
  }

  positiveAction() {
    this.positiveLabelAction.next(this);
    return false;
  }

  cancelAction() {
    this.showModal = false;
    this.closed.next({
      action: ModalAction.CANCEL
    });
    return false;
  }

  closeForm() {
    this.showModal = false;
    console.log('closeForm');
    console.log(this.showModal);
  }
}

export enum ModalAction { POSITIVE, CANCEL }

export interface ModalResult {
  action: ModalAction;
}
