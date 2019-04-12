import {Component, OnInit} from '@angular/core';
import {AuthService} from '../Service/auth.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
  }

}
