import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../Models/person';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidation, NewGuid} from '../../../Utilities/UtilityStringFunc';
import {Challenge} from '../../Models/challenge';
import {DomSanitizer} from '@angular/platform-browser';
import {ChallengePostDTO} from '../../DTOs/challengeDTOs';
import {ChallengeService} from '../../Service/challenge.service';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challenge: Challenge;
  public form: FormGroup;
  private selectedPersons: Person[] = [];
  public topPerson: Person[];

  constructor(private  fb: FormBuilder,
              private http: HttpClient,
              private sanitizer: DomSanitizer,
              private challengeService: ChallengeService,
  ) {

    this.form = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', [Validators.required]],
      firstBounce: ['', Validators.required],
      secondBounce: ['', Validators.required],
      thirdBounce: ['', Validators.required],
      companyName: ['', Validators.required],
      challengeType: ['', Validators.required],
    });
  }

  ngOnInit() {

  }

  isValid(control) {
    return this.form.controls[control].invalid && this.form.controls[control].touched;
  }

  onSubmit() {

    const challenge: ChallengePostDTO = {
      title: this.form.value.title,
      challengeState: 1,
      challengeType: this.form.value.challengeType,
      thirdBounce: this.form.value.thirdBounce,
      secondBounce: this.form.value.secondBounce,
      firstBounce: this.form.value.firstBounce,
      deadline: this.form.value.deadline,
      description: this.form.value.description,
      companyName: this.form.value.companyName,
      id: NewGuid(),
      invitePersonId: this.selectedPersons.map(x => x.id)
    };
    this.challengeService.postChallenge(challenge);
  }

  invitedPerson($event: Person) {
    const person = $event;
    const index = this.selectedPersons.findIndex(x => x.id === person.id);
    if (index === -1) {
      this.selectedPersons.push(person);
    }
    this.topPerson = this.selectedPersons.slice(Math.max(this.selectedPersons.length - 10, 0));
  }

  profilePicture(byteImage) {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/PNG;base64,' + byteImage);
  }
}
