import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Filter} from '../../Models/filter';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ChallengeService} from '../../Service/challenge.service';
import {ChallengeSelectionFilterDTO} from '../../DTOs/challengeDTOs';

@Component({
  selector: 'app-ranking-filter',
  templateUrl: './ranking-filter.component.html',
  styleUrls: ['./ranking-filter.component.css']
})
export class RankingFilterComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  selectedFilters: Array<Filter>;
  private challengeSelectionFilterDTO: ChallengeSelectionFilterDTO;

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit() {
    console.log(this.challenge.id);
    this.challengeService.getSelectionFilterDTO(this.challenge.id).subscribe((data: ChallengeSelectionFilterDTO) => {
      this.challengeSelectionFilterDTO = data;
      if (this.challengeSelectionFilterDTO.keep) {
        this.selectedFilters = this.challengeSelectionFilterDTO.keep;
        console.log(this.challengeSelectionFilterDTO.keep);
      }
    });
  }


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

  closeForm() {

  }

  submitForm() {
    this.challengeSelectionFilterDTO.keep = this.selectedFilters;
    this.challengeService.postRankFilter(this.challengeSelectionFilterDTO);
  }
}
