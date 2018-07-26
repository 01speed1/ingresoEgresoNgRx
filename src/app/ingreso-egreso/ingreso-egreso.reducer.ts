

import * as fromIngresoEgresoActions from "./ingreso-egreso.actions";
import { IngresoEgreso } from "./ingresos-egresos.model";


export interface IngresoEgresoState {
    items: IngresoEgreso[]
}

const estadoInicial: IngresoEgresoState = {
    items: []
}

export function ingresoEgresoReducer(
    state = estadoInicial, 
    action: fromIngresoEgresoActions.IngresoEgresoActions
): IngresoEgresoState  {
    switch (action.type ) {
        case fromIngresoEgresoActions.IgresoEgresoActionTypes.SET_ITEMS:
            return {
                items: [...action.items
                    .map( item => {
                        return { ...item }
                    } )]
            }

        case fromIngresoEgresoActions.IgresoEgresoActionTypes.UNSET_ITEMS:
            return { items: [] }
               
        default: return state;
            
    }
}