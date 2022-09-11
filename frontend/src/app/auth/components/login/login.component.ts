import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm?: UntypedFormGroup;
  isLogin: Observable<boolean> | undefined;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', [ Validators.required ]],
      password: [ '', [ Validators.required ]],
    });
    this.isLogin = this.auth.isLoggedIn;
  }

  loginSubmit() {
    this.auth.login(this.loginForm?.value).subscribe({
      next: () => {
        this.loginForm?.reset();
        this.router.navigate(['main']);
      },
      error: err => alert(err.message)
    });
  }

}
