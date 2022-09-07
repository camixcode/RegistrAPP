import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private alertController: AlertController,
    private activatedRoute: ActivatedRoute
    ) {}
    

  usuario={
    id:"",
    nombreUsuario:"",
    password:"",
    nombre:"",
    apellido:"",
    nivelEducacion:"",
    fechaNacimiento:""
  }

  async presentAlert() {
    if(this.usuario.nombre.length<=0){
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Error campos invalidos',
        buttons: ['OK'],
      });
  
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        subHeader: 'Usuario',
        message: 'Su nombre es '+this.usuario.nombre+" "+this.usuario.apellido,
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  }
  ngOnInit() {
    this.usuario.nombreUsuario=this.activatedRoute.snapshot.paramMap.get("nombreUsuario");
    console.log(this.usuario.nombreUsuario)
  }

  limpiar(){
  this.usuario.nombre=""
  this.usuario.apellido=""
  this.usuario.nivelEducacion=""
  this.usuario.fechaNacimiento=""
  }

}
