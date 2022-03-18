import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoApp } from 'src/app/app.reducers';
import { dividir, multiplicar } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador:number=10;
  constructor(private store: Store<EstadoApp>) { }

  ngOnInit(): void {
    this.store.select("contador").subscribe(contador => this.contador = contador)
  }

  multiplicar(){
   this.store.dispatch(multiplicar({numero:2}))
  }

  dividir(){
    this.store.dispatch(dividir({numero:2}))
  }

  
}
