import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import { AsistenciaPage } from './asistencia.page';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaPageRoutingModule {}


