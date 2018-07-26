import { IngresoEgresoService } from './../ingreso-egreso.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { AppState } from './../../app.reducer';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IngresoEgreso } from '../ingresos-egresos.model';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: []
})
export class DetalleComponent implements OnInit,OnDestroy {

  items: IngresoEgreso[];
  itemsSub: Subscription = new Subscription();
  constructor( 
    private store: Store<AppState>,
    public sIngresoEgreso: IngresoEgresoService

  ) { }

  ngOnInit() {
    this.itemsSub = this.store
      .select('ingresoEgreso')
      .subscribe( ie => {
        this.items = ie.items
      } )

  }

  borrarItem( uid:string ) {
    
    this.sIngresoEgreso.borrarIngresoEgreso(uid)
    

  }

  ngOnDestroy(){
    this.itemsSub.unsubscribe();
  }

}
