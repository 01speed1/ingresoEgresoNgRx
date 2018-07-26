import { Injectable } from '@angular/core';
import { CanActivate } from '../../../node_modules/@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private sAuth: AuthService  ) { }

  canActivate() { 
    return this.sAuth.isAuth()  
     
  }
  
}
