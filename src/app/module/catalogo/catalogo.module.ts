import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogoRoutingModule } from './catalogo-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { SerachComponent } from './pages/serach/serach.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    CatalogsComponent,
    SerachComponent
  ],
  imports: [
    CommonModule,
    CatalogoRoutingModule
  ]
})
export class CatalogoModule { }
