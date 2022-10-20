import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/app/models/user-info.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm?: UntypedFormGroup;
  isLogin: Observable<boolean> | undefined;

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private auth: AuthService,
    public dialogRef: MatDialogRef<LoginComponent>, 
    @Inject(MAT_DIALOG_DATA) public user: UserInfo, 
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [ '', [ Validators.required ]],
      password: [ '', [ Validators.required ]],
    });
    this.isLogin = this.auth.isLoggedIn;
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }
  
  loginSubmit() {
    const { username, password } = this.loginForm?.value;

    const user: UserInfo = {
      username,
      password,
    };

    this.dialogRef.close(user);
  }

}
