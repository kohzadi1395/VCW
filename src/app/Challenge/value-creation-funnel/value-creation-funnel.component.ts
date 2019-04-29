import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Filter} from '../../Models/filter';
import {Idea} from '../../Models/idea';
import {IdeaFilter} from '../../Models/ideaFilter';

@Component({
  selector: 'app-value-creation-funnel',
  templateUrl: './value-creation-funnel.component.html',
  styleUrls: ['./value-creation-funnel.component.css']
})
export class ValueCreationFunnelComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  selectedFilters: Array<Filter>;
  selectedIdeas: Array<Idea>;
  ideaFilters: Array<IdeaFilter>;

  constructor() {
    this.selectedFilters = require('../../shared/selectedFilterData.json');
    this.selectedIdeas = require('../../shared/selectedideaData.json');
    this.ideaFilters = [];
    const tmpIdea: IdeaFilter = new class implements IdeaFilter {
      filters: Array<Filter> = new Array<Filter>();
      idea: Idea = new class implements Idea {
        id: string;
        ideaDescription: string;
        ideaTitle: string;
      }();
    }();

    for (let i = 0; i < this.selectedIdeas.length; i++) {
      tmpIdea.idea = this.selectedIdeas[i];
      tmpIdea.filters = new Array<Filter>();
      for (let j = 0; j < this.selectedFilters.length; j++) {
        tmpIdea.filters.push(this.selectedFilters[j]);
      }
      this.ideaFilters.push(tmpIdea);
    }
  }

  ngOnInit() {
  }

}
