import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Filter} from '../../Models/filter';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ChallengeGetDTO, ChallengeSelectionFilterDTO} from '../../DTOs/challengeDTOs';
import {ChallengeService} from '../../Service/challenge.service';

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
  private challengeDTO: ChallengeGetDTO;
  private challengeSelectionFilterDTO: ChallengeSelectionFilterDTO;

  constructor(private challengeService: ChallengeService) {
    this.filters = [];
    this.KillFilters = [];
    this.KeepFilters = [];
    this.ReviewFilters = [];
    this.MultiplyFilters = [];
  }


  ngOnInit() {
    this.challengeService.getChallenge(this.challenge.id).subscribe((data: ChallengeGetDTO) => {
      this.challengeDTO = data;
      if (this.challengeDTO.filters) {
        this.filters = this.challengeDTO.filters;
        console.log(this.filters);
      }
    });
    this.challengeSelectionFilterDTO = new ChallengeSelectionFilterDTO();
    this.challengeSelectionFilterDTO.challengeId = this.challenge.id;
    this.challengeService.postSelectionFilter(this.challengeSelectionFilterDTO);
    // this.KeepFilters = this.challengeSelectionFilterDTO.keep;
    // this.KillFilters = this.challengeSelectionFilterDTO.kill;
    // this.ReviewFilters = this.challengeSelectionFilterDTO.review;
    // this.MultiplyFilters = this.challengeSelectionFilterDTO.multiply;
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

  closeForm() {
  }

  submitForm() {
    this.challengeSelectionFilterDTO.keep = this.KeepFilters;
    this.challengeSelectionFilterDTO.kill = this.KillFilters;
    this.challengeSelectionFilterDTO.review = this.ReviewFilters;
    this.challengeSelectionFilterDTO.multiply = this.MultiplyFilters;
    this.challengeService.postSelectionFilter(this.challengeSelectionFilterDTO);
  }
}
