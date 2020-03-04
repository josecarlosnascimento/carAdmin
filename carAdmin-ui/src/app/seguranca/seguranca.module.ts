import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JwtModule } from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './login/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';


export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
         whitelistedDomains: environment.tokenWhitelistedDomains,
       blacklistedRoutes: environment.tokenBlacklistedRoutes
      }
    }),
    CommonModule,  FormsModule, BrowserModule, HttpClientModule

  ],
  
  providers: [AuthGuardService]
})
export class SegurancaModule { }
