import {Component, Input, OnInit} from '@angular/core';
import {Challenge} from '../../Models/challenge';
import {GridRowData} from '../../Models/gridRowData';
import {ChallengeService} from '../../Service/challenge.service';
import {ChallengeGetDTO} from '../../DTOs/challengeDTOs';
import {DomSanitizer} from '@angular/platform-browser';
import {Person} from '../../Models/person';

@Component({
  selector: 'app-challenge-view',
  templateUrl: './challenge-view.component.html',
  styleUrls: ['./challenge-view.component.css']
})
export class ChallengeViewComponent implements OnInit {
  challengeDTO: ChallengeGetDTO;
  @Input() gridRowData: GridRowData;
  @Input() challenge: Challenge;
  private topPerson: Person[];

  constructor(private sanitizer: DomSanitizer, private challengeService: ChallengeService) {
  }

  ngOnInit() {
    console.log(this.challenge.id);
    this.challengeService.getChallenge(this.challenge.id).subscribe((data: ChallengeGetDTO) => {
      this.challengeDTO = data;
      this.topPerson = data.invitePerson;
      console.log(data);
    });
  }

  profilePicture(byteImage) {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/PNG;base64,' + byteImage);
  }
}
