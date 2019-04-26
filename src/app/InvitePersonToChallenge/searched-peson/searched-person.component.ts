import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-searched-peron',
  templateUrl: './searched-person.component.html',
  styleUrls: ['./searched-person.component.css']
})
export class SearchedPersonComponent implements OnInit {

  @Output() addPerson = new EventEmitter();
  private person = {
    firstName: '',
    lastName: '',
    title: '',
    image: '',
    company: '',
  };

  get Person(): { firstName: string; lastName: string; company: string; image: string; title: string } {
    return this.person;
  }

  @Input()
  set Person(value: { firstName: string; lastName: string; company: string; image: string; title: string }) {
    this.person = value;
  }

  constructor() {
  }

  ngOnInit() {
  }

  selectPerson() {
    this.addPerson.emit(this.Person);
  }
}
