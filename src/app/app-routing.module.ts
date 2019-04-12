import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CreateChallengeComponent} from './Challenge/create-challenge/create-challenge.component';
import {LoginPageComponent} from './Login/login-page/login-page.component';
import {DefaultComponent} from './default/default.component';

const routes = [
  {
  path: '',
  component: CreateChallengeComponent
},
  // {
  //   path: '',
  //   component: DefaultComponent
  // },
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
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
