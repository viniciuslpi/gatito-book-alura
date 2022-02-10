import { Observable, switchMap } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-de-animais',
  templateUrl: './lista-de-animais.component.html',
  styleUrls: ['./lista-de-animais.component.css']
})
export class ListaDeAnimaisComponent implements OnInit {

  animais$!: Observable<Animais>;

  constructor(private usuarioService: UsuarioService, private animaisService: AnimaisService) { }

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
  }

}
