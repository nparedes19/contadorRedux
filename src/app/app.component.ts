import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EstadoApp } from './app.reducers';
import { decrementar, incrementar, multiplicar } from './contador/contador.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  contador: number=10  

  constructor (private store: Store<EstadoApp>){
    this.store.subscribe(state=>{
      this.contador=state.contador
    })
  }

  incrementar(){
    this.store.dispatch(incrementar())
  }

  decrementar(){
    this.store.dispatch(decrementar())
  }

  
}
