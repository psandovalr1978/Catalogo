import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserLogin } from 'src/app/shared/models/user-login.model';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  private _loginValido: boolean = false;
  get LoginValido(): boolean {
    return  sessionStorage.getItem('login') !>  ""; //this.cookieService.get('login') !> "";
  }

  constructor(private router:Router, private cookieService: CookieService) { }

  login(userLogin: UserLogin) {
    if (userLogin.email == 'admin@lukacova.com' && userLogin.passWord == '1234.Admin') {
      this._loginValido = true;
      this.cookieService.set('login', 'true', 1 / 24 / 60);
      const sesion:any = {fechaHora: new Date()}
      sessionStorage.setItem('login', JSON.stringify(sesion));

    } else {
      this._loginValido = false;
    }
  }

  logout(){
    this.cookieService.delete('login');
    sessionStorage.removeItem('login');
  }
 
}
