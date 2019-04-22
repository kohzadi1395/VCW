import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './MainPage/home/home.component';
import {CreateChallengeComponent} from './Challenge/challenge-create/create-challenge.component';
import {LoginPageComponent} from './MainPage/Login/login-page/login-page.component';
import {DefaultComponent} from './MainPage/default/default.component';
import {DashboardPanelComponent} from './dashboardComponents/dashboard-panel/dashboard-panel.component';
import {ChallengeListComponent} from './Challenge/challenge-list/challenge-list.component';
import {ChallengeViewComponent} from './Challenge/challenge-view/challenge-view.component';
import {ChallengePanelComponent} from './Challenge/challenge-panel/challenge-panel.component';

const routes = [
  // {
  // path: '',
  // component: CreateChallengeComponent
// },
//   {
//     path: '',
//     component: InvitePersonComponent
//   },
  {
    path: '',
    redirectTo: '/Default',
    pathMatch: 'full'
  },

  {
    path: 'Default',
    component: DefaultComponent,
  },
  {
    path: 'challenge',
    component: CreateChallengeComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'component-one/:id',
    component: HomeComponent, canActivate: [LoginPageComponent]
  },
  // {
  //   path: 'messages/:name',
  //   component: MessageComponent
  // },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'challenge',
        component: CreateChallengeComponent
      },
      {
        path: 'allChallenge',
        component: ChallengeListComponent
      },
      {
        path: 'viewChallenge',
        component: ChallengeViewComponent,
        pathMatch: 'full'
      },
      {
        path: 'panelChallenge',
        component: ChallengePanelComponent,
        pathMatch: 'full'
      },
      {
        path: '',
        component: DashboardPanelComponent
      }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
