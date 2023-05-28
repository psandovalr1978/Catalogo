import { Component,AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/sesion/sesion.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements AfterViewInit {

  constructor(private sesionService:SesionService, private router:Router){}
  ngAfterViewInit(): void {
    const partsCatalogScript = document.createElement('script');
    partsCatalogScript.type = 'text/javascript';
    partsCatalogScript.src = 'https://gui.parts-catalogs.com/v2/parts-catalogs.js';
    //document.getElementById('parts-catalog')!.appendChild(partsCatalogScript);
    document.body.appendChild(partsCatalogScript);
  }

  salir(): void{
    this.sesionService.logout();
    this.router.navigate(['/auth/login'])
  }
}
