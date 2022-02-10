import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from '../autenticacao/autenticacao.guard';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDeAnimaisComponent,

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
