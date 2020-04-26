import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LoginInterface} from './login-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthentcatonService {
  private isUserLogedInTemp: boolean;
  private isLodegInSourc = new Subject<boolean>();

  constructor() {
    this.isUserLogedInTemp = false;
  }

  public isUserLogedIn(): boolean {
    return !!this.isUserLogedInTemp;
  }

  public validatedLogin(loginI: LoginInterface): boolean {
    if (loginI.userName === 'sdede' && loginI.password === '123') {
      this.isLodegInSourc.next(true);
      this.isUserLogedInTemp = true;
    } else {
      this.isLodegInSourc.next(false);
      this.isUserLogedInTemp = false;
    }
    return this.isUserLogedInTemp;
  }

  isUserLogedObservable(): Observable<boolean> {
    return this.isLodegInSourc.asObservable();
  }

  logOut() {
    this.isUserLogedInTemp = false;
    this.isLodegInSourc.next(false);
  }
}
