import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/sesion/sesion.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  constructor(private sesionService:SesionService, private router:Router){}

  salir(){
    this.sesionService.logout();
    this.router.navigate(['/auth/login'])
  }
}
