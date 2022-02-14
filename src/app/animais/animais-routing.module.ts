import { NovoAnimalComponent } from './novo-animal/novo-animal.component';
import { ListaAnimaisResolver } from './lista-de-animais/lista-animais.resolver';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacaoGuard } from '../autenticacao/autenticacao.guard';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';

const routes: Routes = [
  {
    path: '',
    component: ListaDeAnimaisComponent,
    resolve: {
      animais: ListaAnimaisResolver
    }
  },
  {
    path: ':animalId',
    component: DetalheAnimalComponent
  },
  {
    path: 'novo',
    component: NovoAnimalComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimaisRoutingModule {}
