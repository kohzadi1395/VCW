import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {TransferDataService} from '../../Service/transfer-data.service';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-challenge-panel',
  templateUrl: './challenge-panel.component.html',
  styleUrls: ['./challenge-panel.component.css']
})
export class ChallengePanelComponent implements OnInit {

  @Input() showModal: boolean;
  @Input() gridRowData: GridRowData;
  challenge: Challenge;
  componentMustShow: any;

  constructor(private transfer: TransferDataService) {
    console.log(transfer.storage);
    this.gridRowData = transfer.storage;
    if (this.gridRowData) {
      this.challenge = transfer.storage;
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

  StepZero() {
    console.log('StepZero Methods');
    this.SetShowComponent('challengeView', 0);
  }

  StepOne() {
    console.log('StepOne Methods');
    this.SetShowComponent('mainChallenge', 1);
  }

  StepTwoA() {
    console.log('StepTwoA Methods');
    this.SetShowComponent('challengeIdea', 2);
  }

  StepTwoB() {
    console.log('StepTwoB Methods');
    this.SetShowComponent('challengeFilter', 3);
  }

  StepThreeA() {
    console.log('StepThreeA Methods');
    this.SetShowComponent('selectIdea', 4);
  }

  StepThreeB() {
    console.log('StepThreeB Methods');
    this.SetShowComponent('selectFilter', 5);
  }

  StepThreeC() {
    console.log('StepThreeC Methods');
    this.SetShowComponent('rankingFilter', 6);

  }

  StepFourA() {
    console.log('StepFourA Methods');
    this.SetShowComponent('valueCreationFunnel', 7);

  }

  StepFourB() {
    console.log('StepFourB Methods');
    this.SetShowComponent('concept', 8);

  }

  StepFive() {
    console.log('StepFive Methods');
    this.SetShowComponent('threeM', 9);

  }

  SetShowComponent(componentName, limitLevel: number) {
    console.log('StepTwoA Methods');
    if (this.challenge && this.challenge.challengeStateCode + 1 > limitLevel) {
      this.componentMustShow = componentName;
      console.log(this.componentMustShow);
      this.openForm();
    }
  }
}
