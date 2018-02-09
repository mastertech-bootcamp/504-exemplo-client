import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  dados = {}

  constructor(public http: HttpClient) {

  }

  enviar(){
    this.http.post('http://45.55.53.12:3000/clientes', this.dados).subscribe(() => {
      alert('Os dados foram salvos!');
    });
  }

}
