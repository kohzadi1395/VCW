import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './dashboardComponents/dashboard/dashboard.component';
import {DashboardElementComponent} from './dashboardComponents/dashboard-element/dashboard-element.component';
import {DonutChartComponent} from './Chart/donut-chart/donut-chart.component';
import {ChartsModule} from 'ng2-charts';
import {CreateChallengeComponent} from './Challenge/challenge-create/create-challenge.component';
import {BarChartComponent} from './Chart/bar-chart/bar-chart.component';
import {PieChartComponent} from './Chart/pie-chart/pie-chart.component';
import {ChallengeListComponent} from './Challenge/challenge-list/challenge-list.component';
import {Ng2TableModule} from 'ng2-table/ng2-table';
import {PaginationModule} from 'ng2-bootstrap/pagination';
import {TabsModule} from 'ng2-bootstrap';
import {LoginPanelComponent} from './MainPage/Login/login-panel/login-panel.component';
import {LoginDescriptionComponent} from './MainPage/Login/login-description/login-description.component';
import {HomeComponent} from './MainPage/home/home.component';
import {LoginPageComponent} from './MainPage/Login/login-page/login-page.component';
import {HttpClientModule} from '@angular/common/http';
import {DefaultComponent} from './MainPage/default/default.component';
import {FileUploadModule} from 'ng2-file-upload';
import {InvitePersonComponent} from './InvitePersonToChallenge/invite-person/invite-person.component';
import {SuiModule} from 'ng2-semantic-ui';
import {TagComponent} from './tag/tag.component';
import {DashboardPanelComponent} from './dashboardComponents/dashboard-panel/dashboard-panel.component';
import {SearchedPersonComponent} from './InvitePersonToChallenge/searched-peson/searched-person.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ChallengeViewComponent} from './Challenge/challenge-view/challenge-view.component';

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
    ChallengeListComponent,
    LoginPanelComponent,
    LoginDescriptionComponent,
    HomeComponent,
    LoginPageComponent,
    DefaultComponent,
    InvitePersonComponent,
    TagComponent,
    DashboardPanelComponent,
    SearchedPersonComponent,
    ChallengeViewComponent,
  ],
  imports: [
    ReactiveFormsModule,
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    AngularFontAwesomeModule,
    Ng2TableModule,
    PaginationModule,
    TabsModule,
    PaginationModule.forRoot(),
    // RouterModule.forRoot(routes),
    HttpClientModule ,
    FileUploadModule,
    SuiModule,
    MatAutocompleteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
