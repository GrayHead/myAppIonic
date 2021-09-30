import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UsersPageRoutingModule} from './users-routing.module';
import {UsersPage} from './users.page';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {Vibration} from '@ionic-native/vibration/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsersPageRoutingModule,
    HttpClientModule
  ],
  declarations: [UsersPage],
  providers: [UserService, Vibration]
})
export class UsersPageModule {
}
