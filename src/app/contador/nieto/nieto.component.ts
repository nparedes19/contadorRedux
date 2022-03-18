import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoApp } from 'src/app/app.reducers';
import { multiplicar, reset } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  contador:number=10;
  constructor(private store: Store<EstadoApp>) { }


  ngOnInit(): void {
    this.store.select("contador").subscribe(contador => this.contador = contador)
  }

  multiplicar(){
    this.store.dispatch(multiplicar({numero:10}))
   }
  
  reset(){
    this.store.dispatch(reset())
  }
}
