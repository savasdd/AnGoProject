import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import {AuthentcatonService} from './securty/authentcaton-servce.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isUserLogedIn$: Observable<boolean>;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private service: AuthentcatonService, private router: Router) {
  }

  logout() {
    this.service.logOut();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.isUserLogedIn$ = this.service.isUserLogedObservable();
  }
}
