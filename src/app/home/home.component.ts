import {Component, OnInit} from '@angular/core';
import {AuthService} from '../Service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  arrayDashboardElement = [1, 2, 3, 4, 5, 6, 7, 8];

  constructor(private auth: AuthService, private router: Router) {

    if (!auth.isAuthentication) {
      this.router.navigate(['/login']);
    }

  }

  ngOnInit() {
  }

}
