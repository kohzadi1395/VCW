import {Component} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import faTrashAlt, {faBell} from '@fortawesome/fontawesome-free-regular/';
import {faPlus, faSearch, faTimes} from '@fortawesome/fontawesome-free-solid';
import {faFacebookF, faGoogle, faTwitter} from '@fortawesome/fontawesome-free-brands';
import {CdkDragDrop} from '@angular/cdk/typings/esm5/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VCW - Value Create Wheel';
  name = '';
  allowButton: boolean;
  tracks = [
    {
      title: 'Todo',
      id: 'todo',
      tasks: [
        {
          id: 'first-task',
          title: 'First Task',
          description: 'This is my first task'
        }
      ]
    },
    {
      title: 'In Progress',
      id: 'inprogress',
      tasks: [
        {
          id: 'seconf-task',
          title: 'Second Task',
          description: 'This is my first task'
        }
      ]
    },
    {
      title: 'D-Done',
      id: 'ddone',
      tasks: [
        {
          id: 'third-task',
          title: 'Third Task',
          description: 'This is my first task'
        }
      ]
    },
    {
      title: 'QA Pass',
      id: 'qapass',
      tasks: [
        {
          id: 'fourth-task',
          title: 'Fourth Task',
          description: 'This is my first task'
        }
      ]
    }
  ]
  ;
  trackIds: any;
  trackColor: any;

  constructor() {
    fontawesome.library.add(faTrashAlt);
    fontawesome.library.add(faBell);
    fontawesome.library.add(faSearch);
    fontawesome.library.add(faFacebookF);
    fontawesome.library.add(faTwitter);
    fontawesome.library.add(faGoogle);
    fontawesome.library.add(faTimes);
    fontawesome.library.add(faPlus);

    this.allowButton = false;
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }

  onTaskDrop(parameters: { $event: CdkDragDrop<object, any> }) {

  }
}
