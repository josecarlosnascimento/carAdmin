import { Component, OnInit } from '@angular/core';
import { AuthService } from './seguranca/login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  usuarioLogado:boolean;

  constructor(private auth: AuthService){
    auth.usuarioLogadoEmmiter.subscribe(resultado => this.usuarioLogado = resultado);
  }

  ngOnInit() {
  }
  

}
