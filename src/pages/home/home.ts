import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cadastros;
  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.http.get('http://45.55.53.12:3000/clientes').subscribe(
      (dados) => {
        this.cadastros = dados;
        console.log(dados);
        
      }
    )
  }

}
