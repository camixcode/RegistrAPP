import { Component } from '@angular/core';
import { noop } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  constructor() {}


  
}
export class Test{
  static var1:number=10;
  }

export class Usuario {
  public id: number;
  public nombre: string;
  public apellido: string;
  public nombreUsuario: string;
  public nivelEducacion: string;
  public fechaNacimiento: string;
  public password: string;

  constructor(id: number,
     nombre: string,
     apellido: string,
     nombreUsuario: string,
     nivelEducacion: string,
     fechaNacimiento: string,
     password: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreUsuario = nombreUsuario;
    this.nivelEducacion = nivelEducacion;
    this.fechaNacimiento = fechaNacimiento;
    this.password = password;
  }

  getName() {
    return this.nombre;
  }


  printUserInfo() {
    console.log(`name: ${this.nombre}, apellido: ${this.apellido}`);
  }
}
