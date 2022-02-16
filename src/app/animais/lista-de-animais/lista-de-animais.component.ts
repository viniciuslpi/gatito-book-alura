import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'app-lista-de-animais',
  templateUrl: './lista-de-animais.component.html',
  styleUrls: ['./lista-de-animais.component.css']
})
export class ListaDeAnimaisComponent implements OnInit {

  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.animais = this.activatedRoute.snapshot.data['animais']
    })
  }




}
