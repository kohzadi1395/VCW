import {Component} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import faTrashAlt, {faBell} from '@fortawesome/fontawesome-free-regular/';
import {faSearch, faTimes} from '@fortawesome/fontawesome-free-solid';
import {faFacebookF, faGoogle, faTwitter} from '@fortawesome/fontawesome-free-brands';
import {AuthService} from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VCW - Value Create Wheel';
  name = '';
  allowButton: boolean;

  constructor(private auth: AuthService) {
    fontawesome.library.add(faTrashAlt);
    fontawesome.library.add(faBell);
    fontawesome.library.add(faSearch);
    fontawesome.library.add(faFacebookF);
    fontawesome.library.add(faTwitter);
    fontawesome.library.add(faGoogle);
    fontawesome.library.add(faTimes);


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
