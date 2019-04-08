import {Component, OnInit} from '@angular/core';
import {AuthService} from '../Service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayDashboardElement = [];

  constructor(private auth: AuthService, private router: Router) {
    if (!auth.isAuthentication) {
      this.router.navigate(['/login']);
    }

    this.arrayDashboardElement.push(1);
    this.arrayDashboardElement.push(2);
    this.arrayDashboardElement.push(3);
    this.arrayDashboardElement.push(4);
    this.arrayDashboardElement.push(5);
    this.arrayDashboardElement.push(6);
  }

  ngOnInit() {
  }

}
