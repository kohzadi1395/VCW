import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Idea} from '../../Models/idea';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-select-idea',
  templateUrl: './select-idea.component.html',
  styleUrls: ['./select-idea.component.css']
})
export class SelectIdeaComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  ideas: Array<Idea>;
  KillIdeas: Array<Idea>;
  KeepIdeas: Array<Idea>;
  ReviewIdeas: Array<Idea>;
  MultiplyIdeas: Array<Idea>;

  constructor() {
    this.ideas = require('../../shared/ideaData.json');
    this.KillIdeas = [];
    this.KeepIdeas = [];
    this.ReviewIdeas = [];
    this.MultiplyIdeas = [];
  }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<Idea[]>) {
    console.log(event);
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data, event.container.data,
        event.previousIndex, event.currentIndex);
    } else {
      moveItemInArray(this.ideas, event.previousIndex, event.currentIndex);

    }
  }
}
