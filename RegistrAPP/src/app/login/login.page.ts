import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario={
    id:"1",
    nombreUsuario:"",
    password:"",
    nombre:"",
    apellido:"",
    nivelEducacion:"",
    fechaNacimiento:""

  }

  mostrarDatos(){
    console.log(this.usuario.nombreUsuario)
  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

   }
  navigate(){
    this.router.navigate(['/home'])
  }

  ngOnInit() {
  
  }

  guardar(){
    console.log('guardar');
  }

  
  

}
