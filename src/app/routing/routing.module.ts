import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginFormComponent} from '../login/login-form/login-form.component';
import {MainComponent} from '../home/main/main.component';
import {LoginGuardServiceService} from '../login/login-guard-service.service';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent,
    canActivate: [LoginGuardServiceService]
  },
  {path: 'login', component: LoginFormComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
