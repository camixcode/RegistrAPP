import { Component } from '@angular/core';
import { Test } from '../app.component';
import { Usuario } from '../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}


  mostrar(){
    let usuario : Usuario;
    console.log(usuario.nombre);

    
  
  }

}


