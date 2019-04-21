import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Challenge} from '../../shared/Track.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmailValidation} from '../../../Utilities/UtilityStringFunc';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  challenge: Challenge;
  private form: FormGroup;

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
}
