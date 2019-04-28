import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Filter} from '../../Models/filter';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-ranking-filter',
  templateUrl: './ranking-filter.component.html',
  styleUrls: ['./ranking-filter.component.css']
})
export class RankingFilterComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  selectedfilters: Array<Filter>;

  constructor() {
    this.selectedfilters = require('../../shared/selectedFilterData.json');
  }

  ngOnInit() {
  }

  // dropped(event: CdkDragDrop<Filter[]>) {
  //   console.log(event);
  //   moveItemInArray(
  //     this.selectedfilters,
  //     event.previousIndex,
  //     event.currentIndex
  //   );
  // }
  dropped(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
