import {Component, OnInit} from '@angular/core';
import {TagService} from '../../Service/tag.service';
import {InvitePersonService} from '../../Service/invite-peosn.service';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {Person} from '../../shared/Track.model';

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
  selectedPersons: Person[];

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

  drop(event: CdkDragDrop<Person[]>) {
    // drop(event) {
    console.log(event);
    moveItemInArray(this.invitePersonService.result, event.previousIndex, event.currentIndex);

  }

  onTalkDrop(event: CdkDragDrop<Person[]>) {
    console.log(event);
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onTrackDrop(event: CdkDragDrop<Person[]>) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
