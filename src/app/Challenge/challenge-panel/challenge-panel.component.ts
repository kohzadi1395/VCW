import {Component, Input, OnInit} from '@angular/core';
import {Challenge, GridRowData} from '../../shared/Track.model';
import {TransferDataService} from '../../Service/transfer-data.service';

@Component({
  selector: 'app-challenge-panel',
  templateUrl: './challenge-panel.component.html',
  styleUrls: ['./challenge-panel.component.css']
})
export class ChallengePanelComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() gridRowData: GridRowData;
  challenge: Challenge;

  constructor(private transfer: TransferDataService) {
    this.gridRowData = transfer.storage;
    if (this.gridRowData) {
      this.challenge = this.gridRowData.columnData;
    }
  }

  ngOnInit() {
  }

  openForm() {
    this.showModal = true;
  }

  closeForm() {
    this.showModal = false;
  }

  StepOne() {
    console.log('StepOne Methods');
    if (this.challenge && this.challenge.challengeStateCode + 1 > 0) {
      this.openForm();
      console.log('StepOne Methods if');

    }
  }
}
