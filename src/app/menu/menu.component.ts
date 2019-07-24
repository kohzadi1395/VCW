import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import {AuthService} from '../Service/auth.service';
import {Challenge} from '../Models/challenge';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  newNotification = 0;
  MyCurrentChallenges: Challenge[];
  MyChallenges: Challenge[];

  InviteRecentChallenges: Challenge[];
  InviteChallenges: Challenge[];

  constructor(public auth: AuthService) {
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
