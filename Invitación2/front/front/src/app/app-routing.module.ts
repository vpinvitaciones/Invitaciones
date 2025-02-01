import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';
import path from 'path';

import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
   {path: 'inicio', component: InicioComponent },
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
 { path: 'Asistencia', component: AsistenciaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
