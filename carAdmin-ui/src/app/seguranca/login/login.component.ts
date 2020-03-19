import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService,
              private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  efetuarLogin(login, senha){
    this.auth.login(login,senha).then(() => {
      this.router.navigate(['/dashboard'])
    }).catch(e => this.toastr.error(e.error.error_description))
  }

}
