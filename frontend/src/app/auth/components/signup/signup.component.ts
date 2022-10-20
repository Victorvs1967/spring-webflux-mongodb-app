import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm?: UntypedFormGroup;

  constructor(
    private formBuilder: UntypedFormBuilder,
    public dialogRef: MatDialogRef<SignupComponent>, 
    @Inject(MAT_DIALOG_DATA) public user: User, 
  ) { }

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
  onNoClick(): void {
    this.dialogRef.close(null);
  }
  
  signupSubmit() {
    const { username, password, email, firstName, lastName, phone } = this.signupForm?.value;

    const user: User = {
      username,
      password,
      email,
      firstName,
      lastName,
      phone,
    };

    this.dialogRef.close(user);
  }

}
