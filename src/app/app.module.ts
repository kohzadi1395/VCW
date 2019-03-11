import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './dashboardComponents/dashboard/dashboard.component';
import {DashboardElementComponent} from './dashboardComponents/dashboard-element/dashboard-element.component';
import {DonutChartComponent} from './Chart/donut-chart/donut-chart.component';
import {ChartsModule} from 'ng2-charts';
import {CreateChallengeComponent} from './create-challenge/create-challenge.component';
import {BarChartComponent} from './Chart/bar-chart/bar-chart.component';
import {PieChartComponent} from './Chart/pie-chart/pie-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DashboardElementComponent,
    DonutChartComponent,
    CreateChallengeComponent,
    BarChartComponent,
    PieChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
