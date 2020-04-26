import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthentcatonService} from '../securty/authentcaton-servce.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardServiceService implements CanActivate {

  constructor(private router: Router, private service: AuthentcatonService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const logedIn = this.service.isUserLogedIn();
    if (!logedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
