import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Filter} from '../../Models/filter';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.css']
})
export class SelectFilterComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  filters: Array<Filter>;
  KillFilters: Array<Filter>;
  KeepFilters: Array<Filter>;
  ReviewFilters: Array<Filter>;
  MultiplyFilters: Array<Filter>;

  constructor() {
    this.filters = require('../../shared/filterData.json');
    this.KillFilters = [];
    this.KeepFilters = [];
    this.ReviewFilters = [];
    this.MultiplyFilters = [];
  }


  ngOnInit() {
  }


  drop(event: CdkDragDrop<Filter[]>) {
    console.log(event);
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.filters, event.previousIndex, event.currentIndex);

    }
  }
}
