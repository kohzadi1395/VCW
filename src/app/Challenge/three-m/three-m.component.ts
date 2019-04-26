import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';

@Component({
  selector: 'app-three-m',
  templateUrl: './three-m.component.html',
  styleUrls: ['./three-m.component.css']
})
export class ThreeMComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  constructor() {
  }

  ngOnInit() {
  }

}
