import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsistenciaComponent } from './asistencia/asistencia.component';

import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
   {path: 'inicio', component: InicioComponent },
   { path: 'asistencia', component: AsistenciaComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // ✅ Agregar useHash
  exports: [RouterModule]
})
export class AppRoutingModule { }

