import {Component, OnInit} from '@angular/core';
import {TagService} from '../../Service/tag.service';
import {InvitePersonService} from '../../Service/invite-peosn.service';

/**
 * @title Autocomplete overview
 */

@Component({
  selector: 'app-invite-person',
  templateUrl: './invite-person.component.html',
  styleUrls: ['./invite-person.component.css']
})
export class InvitePersonComponent implements OnInit {

  constructor(public tagService: TagService, public invitePersonService: InvitePersonService) {
  }


  selectedTags = [];

  searchPersonData = {
    tags: this.selectedTags,
    name: ''
  };


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

  searchPeron() {
    console.log('searchPeron()');
    console.log(this.searchPersonData);
    this.invitePersonService.searchPeron(this.searchPersonData);
  }
}
