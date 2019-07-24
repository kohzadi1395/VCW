import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {ChallengeService} from '../../Service/challenge.service';
import {ChallengeGetVcfDTO, ChallengePostVcfDTO, VcfResultDTO} from '../../DTOs/challengeDTOs';

@Component({
  selector: 'app-value-creation-funnel',
  templateUrl: './value-creation-funnel.component.html',
  styleUrls: ['./value-creation-funnel.component.css']
})
export class ValueCreationFunnelComponent implements OnInit {
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;

  ideaFilters: ChallengeGetVcfDTO;

  constructor(private challengeService: ChallengeService) {
  }

  ngOnInit() {
    this.challengeService.getVcf(this.challenge.id).subscribe((data: ChallengeGetVcfDTO) => {
      this.ideaFilters = data;
      console.log(data);
    });
  }

  closeForm() {
  }

  submitForm() {
    const postVcfDTO = new ChallengePostVcfDTO();
    postVcfDTO.challengeId = this.challenge.id;
    postVcfDTO.VcfResultDTOs = [];
    for (const filterPassed of this.ideaFilters.filterPasseds) {
      for (const idea of filterPassed.ideas) {
        const vcfResultDTO = new VcfResultDTO();
        vcfResultDTO.filterId = filterPassed.filter.id;
        vcfResultDTO.ideaId = idea.id;
        if (idea.isPassed === undefined) {
          vcfResultDTO.isPassed = false;
        } else {
          vcfResultDTO.isPassed = idea.isPassed;
        }
        postVcfDTO.VcfResultDTOs.push(vcfResultDTO);
      }
    }
    this.challengeService.postVcfResult(postVcfDTO);
  }
}
