import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm?: UntypedFormGroup;
  // isLogin: Observable<boolean> | undefined;

  constructor(private formBuilder: UntypedFormBuilder, private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [ '', [ Validators.required ]],
      password: [ '', [ Validators.required ]],
      email: [ '', [ Validators.required, Validators.email ]],
      firstName: [ '' ],
      lastName: [ '' ],
      phone: [ '' ],
    });
  }

  signupSubmit() {
    this.auth.signup(this.signupForm?.value).subscribe({
      next: () => {
        this.signupForm?.reset();
        this.router.navigate(['/auth/login']);
      },
      error: err => alert(err.message)
    });
  }
}
