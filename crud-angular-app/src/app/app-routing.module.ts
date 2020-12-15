import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPublicidadComponent } from './components/add-publicidad/add-publicidad.component';
import { PublicidadDetailComponent } from './components/publicidad-detail/publicidad-detail.component';
import { PublicidadesListComponent } from './components/publicidades-list/publicidades-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'publicidades', pathMatch: 'full' },
  { path: 'publicidades', component: PublicidadesListComponent },
  { path: 'publicidades/:id', component: PublicidadDetailComponent },
  { path: 'add', component: AddPublicidadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
