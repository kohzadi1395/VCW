import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../Service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newNotification = 0;

  constructor(private auth: AuthService) {
    // if (!auth.isAuthentication) {
    //   let booleanPromise = this.router.navigate(['/login']);
    // }
    this.getNewNotification();
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

  getNewNotification() {
    this.newNotification = 5;
  }

}
