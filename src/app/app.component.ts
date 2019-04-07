import {Component} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import faTrashAlt, {faBell} from '@fortawesome/fontawesome-free-regular/';
import {faSearch} from '@fortawesome/fontawesome-free-solid';
import {faFacebookF, faGoogle, faTwitter} from '@fortawesome/fontawesome-free-brands';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VCW - Value Create Wheel';
  name = '';
  Input = '';
  allowButton: boolean;
  arrayDashboardElement = [];

  constructor() {
    fontawesome.library.add(faTrashAlt);
    fontawesome.library.add(faBell);
    fontawesome.library.add(faSearch);
    fontawesome.library.add(faFacebookF);
    fontawesome.library.add(faTwitter);
    fontawesome.library.add(faGoogle);


    this.allowButton = false;
    setTimeout(() => {
      this.allowButton = true;
    }, 2000);
  }

  ChangeTitle() {
    this.title = 'I am New';
  }

  setInput(event: any) {
    console.log(event);
  }
}
