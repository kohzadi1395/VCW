import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-panel',
  templateUrl: './dashboard-panel.component.html',
  styleUrls: ['./dashboard-panel.component.css']
})
export class DashboardPanelComponent implements OnInit {
  arrayDashboardElement = [1, 2, 3, 4, 5, 6];

  constructor() {
  }

  ngOnInit() {
  }

}
