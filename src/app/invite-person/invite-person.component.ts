import {Component, OnInit} from '@angular/core';
import {TagService} from '../Service/tag.service';


interface Itag {
  Text: string;
}

/**
 * @title Autocomplete overview
 */

@Component({
  selector: 'app-invite-person',
  templateUrl: './invite-person.component.html',
  styleUrls: ['./invite-person.component.css']
})
export class InvitePersonComponent implements OnInit {
  selectedTags = [];

  constructor(private tagService: TagService) {
  }

  onChange(value) {
    const tmp = this.selectedTags.findIndex(x => x === value);
    if (tmp === -1) {
      this.selectedTags.push(value);
    }
  }

  removeTagFromList(tagText) {
    console.log(this.selectedTags);
    const index = this.selectedTags.findIndex(x => x === tagText);
    if (index !== -1) {
      this.selectedTags.splice(index, 1);
    }
  }

  ngOnInit(): void {
    this.tagService.getTags();
  }
}
