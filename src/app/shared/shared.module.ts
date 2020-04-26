import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialDesignModule} from '../materialdesign/materialdesign.module';
import {RoutingModule} from '../routing/routing.module';
import {LoginModule} from '../login/login.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialDesignModule,
    RoutingModule,
    LoginModule
  ],
  exports: [MaterialDesignModule, RoutingModule]

})
export class SharedModule {
}
