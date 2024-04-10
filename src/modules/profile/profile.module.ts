import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';
import {MatTabsModule} from "@angular/material/tabs";



@NgModule({
  declarations: [
    WallComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatTabsModule,
  ]
})
export class ProfileModule { }
