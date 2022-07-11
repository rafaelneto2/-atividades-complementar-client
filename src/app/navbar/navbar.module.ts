import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar.component";
import {RegisterClientComponent} from "../client/register-client/register-client.component";
import {LogoutService} from '../security/logout.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  providers: [
    LogoutService
  ]
})
export class NavbarModule { }
