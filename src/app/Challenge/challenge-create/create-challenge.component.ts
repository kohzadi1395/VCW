import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../../Models/person';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidation} from '../../../Utilities/UtilityStringFunc';
import {Challenge} from '../../Models/challenge';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challenge: Challenge;
  private form: FormGroup;
  private selectedPersons: Person[] = [];
  private topPerson: Person[];

  constructor(private  fb: FormBuilder,
              private http: HttpClient) {
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

  }

  invitedPerson($event: Person) {
    const person = $event;
    const index = this.selectedPersons.findIndex(x => x.id === person.id);
    if (index === -1) {
      this.selectedPersons.push(person);
    }
    this.topPerson = this.selectedPersons.slice(Math.max(this.selectedPersons.length - 10, 0));
  }
}
