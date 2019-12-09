import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage()

@Component({//controlados da pagina home.html
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  login() {
    this.navCtrl.setRoot('CategoriasPage') //vai empilhar uma pagina em cima da outra(navegação da home para categorias)
  }

}
