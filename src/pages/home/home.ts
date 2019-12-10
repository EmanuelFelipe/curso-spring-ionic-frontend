import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()

@Component({//controlados da pagina home.html
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewWillEnter() {
    this.menu.swipeEnable(false);//quando estiver na pagina home o menu sera desabilitado, puchar o menu do lado esquerdo
    }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);//quando sair do menu esse sera reabilitado
    }

  login() {
    this.navCtrl.setRoot('CategoriasPage') //vai empilhar uma pagina em cima da outra(navegação da home para categorias)
  }

}
