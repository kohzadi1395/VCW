import {Component, OnInit} from '@angular/core';
import 'bootstrap/dist/js/bootstrap.bundle';
import {AuthService} from '../Service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  newNotification = 5;

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

}
