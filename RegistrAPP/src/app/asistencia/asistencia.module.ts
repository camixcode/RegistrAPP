import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPageRoutingModule } from './asistencia-routing.module';

import { AsistenciaPage } from './asistencia.page';

import {MatSliderModule} from '@angular/material/slider'

import {MatDatepickerModule} from '@angular/material/datepicker';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPageRoutingModule,
    MatSliderModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  declarations: [AsistenciaPage]
})
export class AsistenciaPageModule {}
