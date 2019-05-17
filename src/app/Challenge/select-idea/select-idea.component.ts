import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {Idea} from '../../Models/idea';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {ChallengeService} from '../../Service/challenge.service';
import {ChallengeGetDTO, ChallengeSelectionIdeaDTO} from '../../DTOs/challengeDTOs';

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
  challengeSelectionIdeaDTO: ChallengeSelectionIdeaDTO;
  private challengeDTO: ChallengeGetDTO;

  constructor(private challengeService: ChallengeService) {
    this.ideas = [];
    this.KillIdeas = [];
    this.KeepIdeas = [];
    this.ReviewIdeas = [];
    this.MultiplyIdeas = [];
  }

  ngOnInit() {
    this.challengeService.getChallenge(this.challenge.id).subscribe((data: ChallengeGetDTO) => {
      this.challengeDTO = data;
      if (this.challengeDTO.ideas) {
        this.ideas = this.challengeDTO.ideas;
        console.log(this.ideas);
      }
    });
    this.challengeSelectionIdeaDTO = new ChallengeSelectionIdeaDTO();
    this.challengeSelectionIdeaDTO.challengeId = this.challenge.id;
    this.challengeService.postSelectionIdea(this.challengeSelectionIdeaDTO);
    // this.KeepIdeas = this.challengeSelectionIdeaDTO.keep;
    // this.KillIdeas = this.challengeSelectionIdeaDTO.kill;
    // this.ReviewIdeas = this.challengeSelectionIdeaDTO.review;
    // this.MultiplyIdeas = this.challengeSelectionIdeaDTO.multiply;
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

  submitForm() {
    this.challengeSelectionIdeaDTO.keep = this.KeepIdeas;
    this.challengeSelectionIdeaDTO.kill = this.KillIdeas;
    this.challengeSelectionIdeaDTO.review = this.ReviewIdeas;
    this.challengeSelectionIdeaDTO.multiply = this.MultiplyIdeas;
    this.challengeService.postSelectionIdea(this.challengeSelectionIdeaDTO);
  }

  closeForm() {
  }
}
