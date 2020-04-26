import {Component, OnInit} from '@angular/core';
import {AuthentcatonService} from '../../securty/authentcaton-servce.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LoginInterface} from '../../securty/login-interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginI: LoginInterface;

  constructor(private service: AuthentcatonService, private router: Router, private msb: MatSnackBar) {
  }

  ngOnInit(): void {
    this.loginI = {userName: '', password: ''};
  }

  onLogin() {
    const isLodeg = this.service.validatedLogin(this.loginI);
    if (!isLodeg) {
      this.msb.open('Kullanıcı adınızı ve şifrenizi kontrol ediniz!', 'Uyarı', {duration: 3000});
    } else {
      this.router.navigate(['/home']);
    }

  }
}
