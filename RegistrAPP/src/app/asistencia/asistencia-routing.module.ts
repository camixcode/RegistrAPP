import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import { AsistenciaPage } from './asistencia.page';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AsistenciaPage
  },
  {
    path: 'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsistenciaPageRoutingModule {}


