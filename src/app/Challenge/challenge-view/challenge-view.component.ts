import {Component, Input, OnInit} from '@angular/core';
import {Challenge, GridRowData} from '../../shared/Track.model';

@Component({
  selector: 'app-challenge-view',
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.css']
})
export class ChallengeViewComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  form: any;

  // constructor(private transfer: TransferDataService) {
  //   this.gridRowData = transfer.storage;
  //   if (this.gridRowData) {
  //     this.challenge = this.gridRowData.columnData;
  //   }
  // }
  constructor() {
  }

  ngOnInit() {
  }

  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
  }

}
