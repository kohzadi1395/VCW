import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-searched-peron',
  templateUrl: './searched-person.component.html',
  styleUrls: ['./searched-person.component.css']
})
export class SearchedPersonComponent implements OnInit {


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

}
