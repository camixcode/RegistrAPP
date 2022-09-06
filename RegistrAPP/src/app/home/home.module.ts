import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
<<<<<<< HEAD
import { MatSliderModule } from '@angular/material/slider';
=======
import {MatSliderModule} from '@angular/material/slider';
>>>>>>> 0b5dab074d8521f3d8eb5640ab3dac2de8b343b7

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatSliderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
