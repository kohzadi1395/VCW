import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Person} from '../../Models/person';

@Component({
  selector: 'app-searched-peron',
  templateUrl: './searched-person.component.html',
  styleUrls: ['./searched-person.component.css']
})
export class SearchedPersonComponent implements OnInit {

  @Output() addPerson = new EventEmitter();

  private person: Person = {
    id: '',
    firstName: '',
    lastName: '',
    title: '',
    profileImage: '',
    company: '',
  };

  constructor(private sanitizer: DomSanitizer) {
  }

  get Person(): Person {
    return this.person;
  }

  @Input()
  set Person(value: Person) {
    this.person = value;
    console.log(this.person);
  }

  ngOnInit() {
  }

  selectPerson() {
    this.addPerson.emit(this.Person);
  }

  profilePicture() {
    return this.sanitizer.bypassSecurityTrustUrl('data:image/PNG;base64,' + this.Person.profileImage);
  }
}
