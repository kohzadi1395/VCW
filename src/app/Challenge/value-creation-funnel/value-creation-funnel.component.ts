/* tslint:disable:prefer-for-of */
import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {IdeaFilter} from '../../Models/ideaFilter';

@Component({
  selector: 'app-value-creation-funnel',
  templateUrl: './value-creation-funnel.component.html',
  styleUrls: ['./value-creation-funnel.component.css']
})
export class ValueCreationFunnelComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  ideaFilters: Array<IdeaFilter>;

  constructor() {
    this.ideaFilters = require('../../shared/ValueCreationFunnelData.json');
    console.log(this.ideaFilters);
  }

  ngOnInit() {
  }

}
