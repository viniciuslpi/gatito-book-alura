import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { ListaDeAnimaisComponent } from './lista-de-animais/lista-de-animais.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListaDeAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalheAnimalComponent, ComentariosComponent],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule, MensagemModule, ReactiveFormsModule],
})
export class AnimaisModule {}
