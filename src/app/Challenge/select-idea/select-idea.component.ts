import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-select-idea',
  templateUrl: './select-idea.component.html',
  styleUrls: ['./select-idea.component.css']
})
export class SelectIdeaComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  constructor() {
  }

  ngOnInit() {
  }

}
