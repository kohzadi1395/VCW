import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../Service/auth.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.css']
})
export class LoginPanelComponent implements OnInit {

  loginData = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.loginData);
  }
}
