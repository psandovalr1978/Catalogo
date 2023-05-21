import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SesionGuard } from './core/guard/sesion.guard';

const routes: Routes = [ {
  path:'auth',
  loadChildren:() => import('./module/auth/auth.module').then(m=> m.AuthModule)
},
{
  path:'',
  loadChildren:() => import('./module/catalogo/catalogo.module').then(m=> m.CatalogoModule),
  canActivate: [SesionGuard]
},
{
  path: '**',
  redirectTo:'/auth/login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
