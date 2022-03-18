import {createReducer, on} from "@ngrx/store";
import { decrementar, dividir, incrementar, multiplicar, reset } from "./contador.actions";

export const estadioInicial =20;

const _contadorReducer = createReducer(estadioInicial,
    on(incrementar, state => state +1),
    on(decrementar, state => state -1),
    on(multiplicar, (state, props) => state*props.numero),
    on(dividir, (state, props) => state/props.numero),
    on(reset, state => state =0),
    )

export function contadorReducer(state:any, action:any) {
        return _contadorReducer(state, action);
      }