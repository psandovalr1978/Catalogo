import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CatalogsComponent } from './pages/catalogs/catalogs.component';
import { SerachComponent } from './pages/serach/serach.component';

const routes: Routes = [
  {
    path:'Catalogos',
    component: CatalogoComponent
  },
  {
    path:'Catalogos/serach?q={article}',
    component: SerachComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogoRoutingModule { }
