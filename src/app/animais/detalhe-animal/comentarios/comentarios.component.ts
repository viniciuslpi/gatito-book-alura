import { ComentariosService } from './comentarios.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;

  constructor(private comentarioService: ComentariosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.comentarios$ = this.comentarioService.buscaComentario(this.id);
    this.comentarioForm = this.formBuilder.group({
      comentario: ['', Validators.maxLength(300) ],
    })
  }

    gravar(): void{
      const comentario = this.comentarioForm.get('comentario')?.value ?? '';
      this.comentarios$ = this.comentarioService.incluiComentario(this.id, comentario).pipe(
        switchMap(() => this.comentarioService.buscaComentario(this.id)),
        tap(() => {
          this.comentarioForm.reset(
            alert('Salvo comentário')
          )
        })
      )
    }

}
