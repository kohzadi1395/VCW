import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  private tagTitle: string;
  hideTag: boolean;
  @Output() removeItem = new EventEmitter();


  @Input()
  set TagTitle(value: string) {
    if (typeof (value) !== 'string') {
      throw new Error(`${value} type is not string.`);
    }
    this.tagTitle = value;
  }

  get TagTitle(): string {
    return this.tagTitle;
  }

  constructor() {
    this.hideTag = false;
  }

  ngOnInit() {
  }


  onClose() {
    this.hideTag = true;
    // this.removeItem.emit(this.tagTitle);
  }
}
